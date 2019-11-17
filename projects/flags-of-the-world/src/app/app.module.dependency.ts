import { CoreModule } from "./shared/core/core.module";
import { LayoutModule } from "./layout/layout.module";

// idea is from
// https://github.com/scopsy/angular-forms-example/blob/master/src/app/app.module.dependencies.ts

export const APP_MODULE_DECLARATIONS = [];

export const APP_MODULE_IMPORTS = [CoreModule.forRoot(), LayoutModule];
