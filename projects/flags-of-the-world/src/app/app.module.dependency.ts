import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { NgxsModule } from "@ngxs/store";
import { ecologyState } from "./store";

import { CoreModule } from "./core/core.module";
import { LayoutModule } from "./layout/layout.module";

// idea is from
// https://github.com/scopsy/angular-forms-example/blob/master/src/app/app.module.dependencies.ts

export const APP_MODULE_DECLARATIONS = [];

export const APP_MODULE_IMPORTS = [
  HttpClientModule,
  NgxsModule.forRoot(ecologyState, {
    developmentMode: !environment.production
  }),
  CoreModule.forRoot(),

  LayoutModule
];
