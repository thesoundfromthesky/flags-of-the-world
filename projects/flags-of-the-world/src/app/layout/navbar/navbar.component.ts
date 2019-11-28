import { Component, OnInit } from "@angular/core";
import { NavItem } from '../../view-models';


@Component({
  selector: "layout-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  navItems: NavItem[] = [
    {
      id: 0,
      name: "home",
      link: ["/"],
      active: ["active"],
      options: { exact: true }
    }
  ];

  constructor() {}

  ngOnInit() {}

  trackByFn(i: number, e: any) {
    return e.id;
  }
}
