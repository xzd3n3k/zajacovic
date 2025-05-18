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
      image: 'audirs6c740.jpg',
    },
    {
      title: 'Audi S6',
      description: 'Odložím si sem tuhle AUDI S6 kde se vyráběl kompletní cat-back s elektronickými klapkami. Dohrával pops & bangs a vypnutí sekundárních lambda sond jelikož auto již nemělo katalyzátory 🥳🔥',
      image: 'audis6.jpg',
    },
    {
      title: 'Volvo XC60 T6',
      description: 'VOLVO XC60 T6 nemusí byt jen nudně znící SUV 😬. Díky tomuto klapkovému catback systému o sobe dá hezky vědět.',
      image: 'volvoxc60t6.jpg',
    },
    {
      title: 'Mercedes Benz A45S 4matic',
      description: 'Vlastníte nový Mercedes Benz A45S (A35s,CLA35s,CLA45s) a zdá se Vám že nemá zvuk jaký by mel AMG Mercedes mít?! Umím si s tím poradit aniž by jste přišli o tovární záruku 🥳. Přesně jako tady u tohoto modelu A45S se podařilo vyrobit kompletní výfukový system od turba až po koncový díl v klapkovém provedení. To vše bez jakéhokoliv upravení sériového softwaru a bez svícení CHECK ENGINE, tím pádem bez ztráty tovární záruky. Systém má stále katalyzátor který plni emisní normu EURO 6 ale přitom dovolí motoru lepe dýchat a tím nejen že zvedne nějaký ten kůň nahoru ale propustí i více zvuku který tomuto autu z výroby celkem chybí.',
      image: 'mercedesbenza45s.jpg',
    },
    {
      title: 'Renault Megane RS',
      description: 'Kompletní klapkový Catback (downpipe bez katu byl již nainstalován) na RENAULT MEGANE RS. Tohle auto mě celkem hodně překvapilo jaký umí krásný zvuk 🥳🔥',
      image: 'renaultmeganers.jpg',
    },
  ]);
}
