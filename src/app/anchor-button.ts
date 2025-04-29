import { Component, input } from "@angular/core";

@Component({
  selector: "a-button",
  template: `<a [href]="destination()">{{text()}}</a>`,
  styleUrl: "./anchor-button.scss",
})
export class AnchorButton {
  text = input("click me");
  destination = input("/");
}
