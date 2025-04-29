import { Component, input } from "@angular/core";

@Component({
  selector: "news",
  template: `
    <img src="logo_color.svg" alt="">
    <h2>{{title()}}</h2>
    <p>{{summary()}}</p>
  `,
  styleUrls: ["./news.scss"]
})
export class News {
  title = input("Title");
  summary = input("Summary");
}
