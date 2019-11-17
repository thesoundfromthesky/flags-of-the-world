import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";

import { LAYOUT_MODULE_IMPORTS } from "./layout.module.dependency";

import { LayoutComponent } from "./layout.component";
import { ContentComponent } from "./content/content.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, ContentComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule, ...LAYOUT_MODULE_IMPORTS]
})
export class LayoutModule {}
