import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [],
  template: '<div [style.align-items]="align"><ng-content></ng-content></div>',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @Input() align = "stretch"
}
