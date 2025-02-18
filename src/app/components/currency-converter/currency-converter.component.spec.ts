import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CurrencyConverterComponent } from './currency-converter.component';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyConverterComponent, HttpClientModule, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate toAmount correctly', () => {
    component.fromAmount = 1;
    component.fromCurrency = 'EUR';
    component.toCurrency = 'USD';
    component.calculateToAmount();
    expect(component.toAmount).toBeCloseTo(1, 4);
  });

  it('should calculate fromAmount correctly', () => {
    component.toAmount = 1;
    component.fromCurrency = 'EUR';
    component.toCurrency = 'USD';
    component.calculateFromAmount();
    expect(component.fromAmount).toBeCloseTo(1, 4);
  });
});
