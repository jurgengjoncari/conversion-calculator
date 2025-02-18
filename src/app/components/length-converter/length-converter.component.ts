import {Component, OnInit} from '@angular/core';
import {ConverterComponent} from "../converter/converter.component";
import catalog from "../../../assets/catalog.json"
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardTitleGroup} from "@angular/material/card";

@Component({
  selector: 'app-length-converter',
  standalone: true,
  imports: [
    ConverterComponent,
    FlexLayoutModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardTitleGroup,
    MatCardContent
  ],
  templateUrl: './length-converter.component.html',
  styleUrl: './length-converter.component.scss'
})

export class LengthConverterComponent implements OnInit{
  fromUnit: string = 'm';
  toUnit: string = 'in';
  fromAmount: number = 1;
  toAmount: number = 0;
  lengths: {[key: string]: {[key: string]: number}} = catalog.lengths;

  ngOnInit() {
    this.calculateToAmount();
  }

  calculateToAmount(): void {
    this.toAmount = this.fromAmount * this.lengths[this.fromUnit][this.toUnit] ;
  }

  calculateFromAmount(): void {
    this.fromAmount = this.toAmount * this.lengths[this.toUnit][this.fromUnit];
  }

  handleFromAmountChange(amount: number): void {
    this.fromAmount = amount;
    this.calculateToAmount();
  }

  handleFromUnitChange(unit: string): void {
    this.fromUnit = unit;
    this.calculateToAmount();
  }

  handleToAmountChange(amount: number): void {
    this.toAmount = amount;
    this.calculateFromAmount();
  }

  handleToUnitChange(unit: string): void {
    this.toUnit = unit;
    this.calculateToAmount();
  }
}
