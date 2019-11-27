import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { CountriesStateModel } from "../store/countries";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @Select(({ countries }) => countries)
  countries$: Observable<CountriesStateModel>;
  constructor() {}

  ngOnInit() {}

  trackByFn(i, e) {
    return e.name;
  }
}
