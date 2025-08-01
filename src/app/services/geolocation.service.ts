import { Injectable } from '@angular/core';
import {from, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCurrencyByLocation(): Observable<string> {
    return from(fetch('https://ipapi.co/json/')
      .then(response => response.json()))
      .pipe(map(data => data.currency));
  }
}
