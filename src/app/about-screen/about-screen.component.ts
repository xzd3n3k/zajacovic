import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {HeadingComponent} from '../components/heading/heading.component';

@Component({
  selector: 'zaj-about-screen',
  imports: [
    TranslatePipe,
    HeadingComponent
  ],
  templateUrl: './about-screen.component.html',
  styleUrl: './about-screen.component.scss'
})
export class AboutScreenComponent {

}
