import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConverterComponent } from './length-converter.component';

describe('LengthConverterComponent', () => {
  let component: LengthConverterComponent;
  let fixture: ComponentFixture<LengthConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LengthConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LengthConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
