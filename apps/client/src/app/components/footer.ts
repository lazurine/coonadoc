import { Component } from "@angular/core";
import { routeNames } from "../app.routes";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: "app-footer",
  templateUrl: "./footer.html",
  styleUrl: "./footer.scss",
})
export class Footer {
  routes = routeNames;
}
