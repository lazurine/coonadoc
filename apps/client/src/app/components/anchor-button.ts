import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AnchorType } from "./anchor-type";

@Component({
  selector: "a-button",
  imports: [RouterLink],
  template: `
    @if (typ() === AnchorTypeTy.Router) {
      <a [routerLink]="destination()">{{text()}}</a>
    } @else if(typ() == AnchorTypeTy.Href){
      <a [href]="destination()">{{text()}}</a>
    } @else if(typ() == AnchorTypeTy.Download){
      <a [href]="destination()" download>{{text()}}</a>
    }
    `,
  styleUrl: "./anchor-button.scss",
})
export class AnchorButton {
  AnchorTypeTy = AnchorType
  text = input("click me");
  destination = input("/");
  typ = input(AnchorType.Router)
}
