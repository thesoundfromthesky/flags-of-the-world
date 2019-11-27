import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { CountriesSelectors } from "../../store";

@Component({
  selector: "home-displays",
  templateUrl: "./displays.component.html",
  styleUrls: ["./displays.component.scss"]
})
export class DisplaysComponent implements OnInit {
  @Select(CountriesSelectors.displays) displays$;
  constructor() {}

  ngOnInit() {}

  trackByFn(i: number, e: any) {
    return e;
  }
}
