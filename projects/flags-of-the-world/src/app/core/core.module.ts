import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from "@angular/core";

import { CORE_MODULE_PROVIDERS } from "./core.module.dependency";

@NgModule()
export class CoreModule {
  // about singleton service
  // https://angular.io/guide/singleton-services

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [...CORE_MODULE_PROVIDERS]
    };
  }
}
