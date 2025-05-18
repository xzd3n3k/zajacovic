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
      title: 'Audi RS6 C7 4.0',
      description: 'Ještě si sem odložím jednu V8 Bi-turbo a to tuhle krásnou AUDI RS6 C7 4.0. Zde se taky jednalo o výrobu kompletního catback (od katalyzátoru) systému v klapkovém provedení. A pro podtržení celé krásy i nalakování koncovek do vysoce lesklé',
      image: 'audirs6c740.jpg'
    },
    {
      title: 'Audi S6',
      description: 'Odložím si sem tuhle AUDI S6 kde se vyráběl kompletní cat-back s elektronickými klapkami. Dohrával pops & bangs a vypnutí sekundárních lambda sond jelikož auto již nemělo katalyzátory 🥳🔥',
      image: 'audis6.jpg'
    },
  ])
}
