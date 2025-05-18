import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LanguageSelectorComponent} from './components/language-selector/language-selector.component';

@Component({
  selector: 'zaj-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    TranslateModule,
    LanguageSelectorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly translateService = inject(TranslateService);

  protected readonly currentYear = signal(new Date().getFullYear());

  constructor() {
    this.translateService.addLangs(['en', 'cs', 'sk']);
    this.translateService.setDefaultLang('cs');

    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      this.switchLang(savedLang);
      return;
    }

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/en|cs|sk/) ? browserLang : 'cs');
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
  }
}
