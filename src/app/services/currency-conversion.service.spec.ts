import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurrencyConversionService } from './currency-conversion.service';
import { environment } from '../../environment';

describe('CurrencyConversionService', () => {
  let service: CurrencyConversionService;
  let httpMock: HttpTestingController;
  const { API_URL } = environment.currency;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyConversionService]
    });
    service = TestBed.inject(CurrencyConversionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch conversion rates', () => {
    const mockRates = { rates: { USD: 1.2 } };
    const baseCurrency = 'EUR';

    service.getExchangeRates(baseCurrency).subscribe(rates => {
      expect(rates).toEqual(mockRates);
    });

    const req = httpMock.expectOne(`${API_URL}/${baseCurrency}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRates);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
