import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { country } from '../shared/employee.common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) { }

  getCountries(): Observable<country[]> {
    return this.http.get<country[]>('https://restcountries.eu/rest/v2/all?fields=name;flag');
  }
}
