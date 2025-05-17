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
  private readonly translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'cs', 'sk']);
    this.translate.setDefaultLang('cs');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|cs|sk/) ? browserLang : 'cs');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
