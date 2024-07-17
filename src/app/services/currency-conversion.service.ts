// src/app/services/currency-conversion.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environment";

const {API_URL} = environment.currency;

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  private URL = API_URL;

  constructor(private http: HttpClient) { }

  getExchangeRates(base: string): Observable<any> {
    return this.http.get(`${this.URL}/${base}`);
  }
}
