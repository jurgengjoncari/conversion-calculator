import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { CurrencyConverterComponent } from "./components/currency-converter/currency-converter.component";
import { LengthConverterComponent } from "./components/length-converter/length-converter.component";
import { CommonModule } from "@angular/common";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CurrencyConverterComponent,
    LengthConverterComponent,
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    RouterLink,
    RouterLinkActive,
    MatTabLink,
    MatTabNav,
    MatTabNavPanel,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatToolbar,
    MatIcon,
    MatAnchor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'conversion-calculator';

  constructor(public router: Router) {
  }
}
