import { routeNames } from '../app.routes'
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  imports: [ RouterLink, RouterLinkActive ],
  selector: "navbar",
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.scss",
})
export class Navbar {
  routes = routeNames;
}
