import {Component, computed, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {Language} from '../../models/language.model';
import {IconComponent} from '../icon/icon.component';
import {TranslateService} from '@ngx-translate/core';
import {PopupComponent} from '../popup/popup.component';
import {isMobile} from '../../shared/utils/device.util';

@Component({
  selector: 'zaj-language-selector',
  imports: [
    ButtonComponent,
    IconComponent,
    PopupComponent,
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit {
  private readonly translateService = inject(TranslateService);
  protected readonly isMobile = isMobile;

  protected readonly languages: WritableSignal<Language[]> = signal([
    { code: 'en', label: 'English', flag: 'united_kingdom_icon', active: false },
    { code: 'cs', label: 'Čeština', flag: 'czechia_icon', active: false },
    { code: 'sk', label: 'Slovenčina', flag: 'slovakia_icon', active: false },
  ]);

  protected readonly currentLanguage = computed(() => this.languages().find(language => language.active));

  ngOnInit() {
    this.updateLanguages(this.translateService.currentLang);
  }

  protected switchLanguage(languageCode: string) {
    this.updateLanguages(languageCode);
    this.translateService.use(languageCode);
  }

  private updateLanguages(languageCode: string) {
    const updated = this.languages().map(lang => ({
      ...lang,
      active: lang.code === languageCode,
    }));
    this.languages.set(updated);
  }
}
