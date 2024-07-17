import { Routes } from '@angular/router';
import {CurrencyConverterComponent} from "./components/currency-converter/currency-converter.component";
import {LengthConverterComponent} from "./components/length-converter/length-converter.component";

export const routes: Routes = [
  { path: 'currency-converter', component: CurrencyConverterComponent },
  { path: 'length-converter', component: LengthConverterComponent },
  { path: '', redirectTo: '/currency-converter', pathMatch: 'full' }, // Default route
];
