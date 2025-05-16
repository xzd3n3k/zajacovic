import { Component } from '@angular/core';
import {HeadingComponent} from '../components/heading/heading.component';

@Component({
  selector: 'zaj-home-screen',
  imports: [
    HeadingComponent
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {
  text1 = 'Specializujeme se na zakázkovou výrobu nerezových dílů pro motorsport a úpravy vozidel. Vyrábíme výfuky, intercoolery, potrubí a další specifické komponenty na míru. Svařujeme metodami TIG a CO2 – s důrazem na preciznost a funkční design.';
  text2 = 'Specializujeme se na zakázkovou výrobu nerezových dílů pro motorsport a úpravy vozidel. Na míru navrhujeme a vyrábíme výfukové systémy, intercoolery, potrubí a další technické komponenty. Pracujeme metodami TIG a CO2, s důrazem na precizní zpracování, funkčnost a čistý design.';
}
