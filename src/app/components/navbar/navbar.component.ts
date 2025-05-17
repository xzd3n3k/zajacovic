import {Component, ElementRef, viewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonComponent} from '../button/button.component';
import {IconComponent} from '../icon/icon.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'zaj-navbar',
  imports: [
    RouterLink,
    ButtonComponent,
    IconComponent,
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly navRef = viewChild.required<ElementRef>('navRef');

  protected toggleNavbar() {
    this.navRef().nativeElement.classList.toggle('responsive_nav');
  }
}
