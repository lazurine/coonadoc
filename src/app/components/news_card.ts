import { Component, input } from "@angular/core";

@Component({
  selector: "news-section",
  template: `
    <div class = "wrapper">
      <div class = "section">
        <div class = "news">
          <ng-content></ng-content>
        </div>
      </div>
    </div>`,
  styleUrls: [ "./news_section.scss" ],
})
export class NewsPageSection {}

@Component({
  selector: "news",
  template: `
    <img src="logo_color.svg" alt="">
    <h2>{{title()}}</h2>
    <p>{{summary()}}</p>
  `,
  styleUrls: ["./news_card.scss"]
})
export class NewsCard {
  title = input("Title");
  summary = input("Summary");
}
