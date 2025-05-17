import {Component, input} from '@angular/core';
import {ButtonVariant} from '../../models/button-variant.type';
import {ButtonSize} from '../../models/button-size.type';

@Component({
  selector: 'zaj-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('normal');
  readonly disabled = input<boolean>(false);
}
