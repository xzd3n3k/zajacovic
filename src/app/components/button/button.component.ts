import {Component, input} from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost' | 'success';
type ButtonSize = 'small' | 'normal' | 'large' | 'icon';

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
