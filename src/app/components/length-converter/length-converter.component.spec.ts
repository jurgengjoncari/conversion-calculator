import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LengthConverterComponent } from './length-converter.component';

describe('LengthConverterComponent', () => {
  let component: LengthConverterComponent;
  let fixture: ComponentFixture<LengthConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LengthConverterComponent, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LengthConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate toAmount correctly', () => {
    component.fromAmount = 1;
    component.fromUnit = 'm';
    component.toUnit = 'in';
    component.calculateToAmount();
    expect(component.toAmount).toBeCloseTo(39.3701, 4);
  });

  it('should calculate fromAmount correctly', () => {
    component.toAmount = 39.3701;
    component.fromUnit = 'm';
    component.toUnit = 'in';
    component.calculateFromAmount();
    expect(component.fromAmount).toBeCloseTo(1, 4);
  });
});
