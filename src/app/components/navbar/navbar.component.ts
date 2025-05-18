import {Component, ElementRef, signal, viewChild, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonComponent} from '../button/button.component';
import {IconComponent} from '../icon/icon.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NavBarLink} from '../../models/nav-bar-link.model';
import {isMobile, isSmallDevice} from '../../shared/utils/device.util';

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

  protected readonly isMobile = isMobile;
  protected readonly isSmallDevice = isSmallDevice;

  protected readonly navLinks: WritableSignal<NavBarLink[]> = signal([
    { label: 'i18n.navbar.home', route: '/home', clickFunction: () => this.toggleNavbar() },
    { label: 'i18n.navbar.products', route: '/products', clickFunction: () => this.toggleNavbar(), disabled: true },
    { label: 'FAQ', route: '/faq', clickFunction: () => this.toggleNavbar(), disabled: true },
    { label: 'i18n.navbar.about', route: '/about', clickFunction: () => this.toggleNavbar() },
  ]);

  protected toggleNavbar() {
    if (this.isSmallDevice()) {
      this.navRef().nativeElement.classList.toggle('responsive_nav');
    }
  }
}
