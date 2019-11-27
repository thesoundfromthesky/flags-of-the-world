import { CountriesService } from "./countries.service";
import { MockCountriesService } from "./mock-countries.service";
import { HttpClient } from "@angular/common/http";

const countriesServiceFactory = (isDev: boolean, http: HttpClient) =>
  isDev ? new MockCountriesService(http) : new CountriesService(http);

export const CountriesServiceProvider = {
  provide: CountriesService,
  useFactory: countriesServiceFactory,
  deps: ["isDev", HttpClient]
};
