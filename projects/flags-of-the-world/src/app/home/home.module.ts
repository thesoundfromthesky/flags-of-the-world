import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { DisplaysComponent } from './displays/displays.component';
import { DisplayComponent } from './displays/display/display.component';
import { BatchDirective } from './batch.directive';

@NgModule({
  declarations: [HomeComponent, DisplaysComponent, DisplayComponent, BatchDirective],
  imports: [CommonModule]
})
export class HomeModule {}
