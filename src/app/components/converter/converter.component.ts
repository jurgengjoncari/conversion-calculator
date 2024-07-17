import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {CommonModule, DecimalPipe, KeyValuePipe} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDivider} from "@angular/material/divider";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader, MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    FormsModule,
    MatInput,
    DecimalPipe,
    KeyValuePipe,
    MatOptionModule,
    MatSelectModule,
    CommonModule,
    FlexLayoutModule,
    MatDivider,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatAnchor,
    MatIcon,
    MatCardTitleGroup,
    MatCardSubtitle
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  @Input() units: { [key: string]: any } = {};
  @Input() fromUnit!: string;
  @Input() toUnit!: string;
  @Input() fromAmount: number = 1;
  @Input() toAmount: number = 1;
  @Input() result: number = 1;
  @Input() unit!: string;
  @Input() subtitle: string | undefined;

  @Output() fromUnitChange = new EventEmitter<string>();
  @Output() toUnitChange = new EventEmitter<string>();
  @Output() fromAmountChange = new EventEmitter<number>();
  @Output() toAmountChange = new EventEmitter<number>();

  onFromUnitChange(unit: string): void {
    this.fromUnitChange.emit(unit);
  }

  onToUnitChange(unit: string): void {
    this.toUnitChange.emit(unit);
  }

  onFromAmountChange(amount: number): void {
    this.fromAmountChange.emit(amount);
  }

  onToAmountChange(amount: number): void {
    this.toAmountChange.emit(amount);
  }
}

