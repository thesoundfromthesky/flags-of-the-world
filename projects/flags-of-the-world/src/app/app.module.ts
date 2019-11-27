import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  APP_MODULE_DECLARATIONS,
  APP_MODULE_IMPORTS
} from "./app.module.dependency";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...APP_MODULE_IMPORTS],
  bootstrap: [AppComponent]
})
export class AppModule {}
