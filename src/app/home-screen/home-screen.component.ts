import { Component } from '@angular/core';
import {HeadingComponent} from '../components/heading/heading.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'zaj-home-screen',
  imports: [
    HeadingComponent,
    TranslatePipe
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {}
