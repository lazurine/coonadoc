import { Component } from "@angular/core";
import { AnchorButton } from "../components/anchor-button";
import { NewsCard, NewsPageSection } from "../components/news_card";
import { PageSectionComponent } from "../components/page-section/page-section.component";
import { ColumnComponent } from "../components/column/column.component";
import { routeNames } from "../app.routes";

@Component({
  selector: "home",
  imports: [AnchorButton, NewsCard, PageSectionComponent, NewsPageSection, ColumnComponent],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {
  routes = routeNames
}
