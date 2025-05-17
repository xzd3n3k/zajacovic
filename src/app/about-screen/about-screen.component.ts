import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'zaj-about-screen',
  imports: [
    TranslatePipe
  ],
  templateUrl: './about-screen.component.html',
  styleUrl: './about-screen.component.scss'
})
export class AboutScreenComponent {

}
