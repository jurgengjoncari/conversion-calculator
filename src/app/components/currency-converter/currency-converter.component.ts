// src/app/components/currency-converter/currency-converter.component.ts
import {Component, OnInit} from '@angular/core';
import { CurrencyConversionService } from '../../services/currency-conversion.service';
import {ConverterComponent} from "../converter/converter.component";
import {FlexModule} from "@angular/flex-layout";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  standalone: true,
  imports: [
    ConverterComponent,
    FlexModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardTitleGroup,
    MatAnchor,
    MatCardFooter,
    MatIcon,
    MatCardContent
  ],
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  fromCurrency = 'USD';
  toCurrency = 'EUR';
  fromAmount = 1;
  toAmount = 0;
  exchangeRates: {[key: string]: number} = {'USD': 1};
  lastUpdated!: string;

  constructor(private currencyService: CurrencyConversionService) { }

  ngOnInit(): void {
    this.getExchangeRates(this.fromCurrency);
  }

  getExchangeRates(currency: string): void {
    this.currencyService.getExchangeRates(currency).subscribe(data => {
      this.exchangeRates = data.rates;
      this.exchangeRates[currency] = 1;
      this.lastUpdated = data.time_last_update_utc
      this.calculateToAmount();
    });
  }

  calculateToAmount(): void {
    this.toAmount = this.fromAmount * this.exchangeRates[this.toCurrency];
  }

  calculateFromAmount(): void {
    this.fromAmount = this.toAmount / this.exchangeRates[this.toCurrency];
  }

  handleFromAmountChange(amount: number): void {
    this.fromAmount = amount;
    this.calculateToAmount();
  }

  handleFromCurrencyChange(currency: string): void {
    this.fromCurrency = currency;
    this.getExchangeRates(currency);
  }

  handleToAmountChange(amount: number): void {
    this.toAmount = amount;
    this.calculateFromAmount();
  }

  handleToCurrencyChange(currency: string): void {
    this.toCurrency = currency;
    this.calculateToAmount();
  }
}
