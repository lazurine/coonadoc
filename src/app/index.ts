import { Component } from "@angular/core";
import { AnchorButton } from "./anchor-button";
import { News } from "./news";

@Component({
  selector: "home",
  imports: [AnchorButton, News],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
