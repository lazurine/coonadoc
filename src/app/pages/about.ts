import { Component } from '@angular/core';
import { ColumnComponent } from '../components/column/column.component';
import { PageSectionComponent } from '../components/page-section/page-section.component';
import { AnchorButton } from '../components/anchor-button';
import { AnchorType } from '../components/anchor-type'
@Component({
  selector: 'app-about',
  imports: [ColumnComponent, PageSectionComponent, AnchorButton],
  templateUrl: './about/about.html',
  styleUrl: './about/about.scss'
})
export class About {
  anchorType = AnchorType
  getDest(name: string): string {
    return `/normativa/${encodeURIComponent(name)}.pdf`
  }
}
