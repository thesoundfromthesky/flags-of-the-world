import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Country } from "projects/flags-of-the-world/src/app/models";

@Injectable()
export class CountriesService {
  private readonly apiBaseUrl: string = "https://restcountries.eu/rest/v2/";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.apiBaseUrl}all?fields=name;capital;population;flag;currencies;languages;demonym`
    );
  }
}
