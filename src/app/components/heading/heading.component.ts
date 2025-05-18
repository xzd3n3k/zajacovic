import {Component, input} from '@angular/core';

@Component({
  selector: 'zaj-heading',
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  readonly textColor = input('currentColor');

  resolveColor(value: string): string {
    if (value?.startsWith('--')) {
      return `var(${value})`;
    }
    return value || 'currentColor';
  }
}
