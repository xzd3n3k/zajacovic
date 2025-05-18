import {Component, inject, input, OnChanges, signal, WritableSignal} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {take} from 'rxjs';

@Component({
  selector: 'zaj-icon',
  imports: [HttpClientModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnChanges {
  readonly name = input.required<string>();
  readonly size = input<number>(32);
  readonly color = input<string>('currentColor');

  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly svgContent: WritableSignal<SafeHtml | null> = signal(null);

  ngOnChanges(): void {
    if (this.name()) {
      const url = `assets/icons/${this.name()}.svg`;
      const colorValue = this.color();
      const sizeValue = this.size();

      this.http.get(url, { responseType: 'text' })
        .pipe(take(1))
        .subscribe({
          next: (svg: string) => {
            let processedSvg = svg;

            if (colorValue && colorValue !== 'rawIcon') {
              processedSvg = processedSvg
                .replace(/fill=".*?"/gi, `fill="${colorValue}"`)
                .replace(/stroke=".*?"/gi, `stroke="${colorValue}"`);

              processedSvg = processedSvg.replace(
                /<(path|circle|rect|polygon|line|ellipse)(\s|>)/gi,
                `<$1 fill="${colorValue}" stroke="${colorValue}" `
              );
            }

            processedSvg = processedSvg
              .replace(/width=".*?"/i, `width="${sizeValue}"`)
              .replace(/height=".*?"/i, `height="${sizeValue}"`);

            this.svgContent.set(
              this.sanitizer.bypassSecurityTrustHtml(processedSvg)
            );
          },
          error: () => {
            console.error(`SVG not found: ${url}`);
            this.svgContent.set(null);
          }
        });
    }
  }
}
