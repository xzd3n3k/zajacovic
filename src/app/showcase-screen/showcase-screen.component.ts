import {Component, signal} from '@angular/core';
import {HeadingComponent} from "../components/heading/heading.component";
import {TranslatePipe} from "@ngx-translate/core";
import {PostComponent} from '../components/post/post.component';
import {Post} from '../shared/models/post.model';

@Component({
  selector: 'zaj-showcase-screen',
  imports: [
    HeadingComponent,
    TranslatePipe,
    PostComponent
  ],
  templateUrl: './showcase-screen.component.html',
  styleUrl: './showcase-screen.component.scss'
})
export class ShowcaseScreenComponent {
  protected readonly posts = signal<Post[]>([
    {
      title: 'i18n.showcase.exhaustblock',
      description: 'i18n.showcase.exhaustblock',
      image: 'exhaustblock.jpg',
    },
    {
      title: 'Audi RS6 C7 4.0',
      description: 'i18n.showcase.rs6',
      image: 'audirs6c740.jpg',
    },
    {
      title: 'Audi S6',
      description: 'i18n.showcase.s6',
      image: 'audis6.jpg',
    },
    {
      title: 'Volvo XC60 T6',
      description: 'i18n.showcase.xc60',
      image: 'volvoxc60t6.jpg',
    },
    {
      title: 'Mercedes Benz A45S 4matic',
      description: 'i18n.showcase.a45s',
      image: 'mercedesbenza45s.jpg',
    },
    {
      title: 'Renault Megane RS',
      description: 'i18n.showcase.meganers',
      image: 'renaultmeganers.jpg',
    },
    {
      title: 'Kia Stinger 3.3 V6',
      image: 'kiastinger.jpg',
    }
  ]);
}
