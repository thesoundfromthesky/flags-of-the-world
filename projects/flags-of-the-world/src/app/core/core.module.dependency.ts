import { WINDOW_PROVIDERS } from "./window";
import { CountriesServiceProvider } from "./http";
import { IsDevProvider } from "./is-dev";
import { ErrorProvider } from "./error";
import { INTERCEPTOR_PROVIDERS } from './http-interceptor';

export const CORE_MODULE_PROVIDERS = [
  ...INTERCEPTOR_PROVIDERS,
  ...WINDOW_PROVIDERS,
  // ErrorProvider,
  IsDevProvider,
  CountriesServiceProvider
];
