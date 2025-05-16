import {Component, input} from '@angular/core';

@Component({
  selector: 'zaj-heading',
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  readonly textColor = input('currentColor');
}
