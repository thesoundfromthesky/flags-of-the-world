import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Country } from "projects/flags-of-the-world/src/app/models";

@Injectable()
export class MockCountriesService {
  private readonly apiBaseUrl: string = "assets/mockup/";
  constructor(private http: HttpClient) {
    console.log("Mockup running");
  }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiBaseUrl}countries.json`);
  }
}
