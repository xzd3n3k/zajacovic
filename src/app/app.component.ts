import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'zaj-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly translateService = inject(TranslateService);

  constructor() {
    this.translateService.addLangs(['en', 'cs', 'sk']);
    this.translateService.setDefaultLang('cs');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/en|cs|sk/) ? browserLang : 'cs');
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
  }
}
