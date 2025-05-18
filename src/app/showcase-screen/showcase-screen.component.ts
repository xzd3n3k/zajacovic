import { Component } from '@angular/core';
import {HeadingComponent} from "../components/heading/heading.component";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'zaj-showcase-screen',
    imports: [
        HeadingComponent,
        TranslatePipe
    ],
  templateUrl: './showcase-screen.component.html',
  styleUrl: './showcase-screen.component.scss'
})
export class ShowcaseScreenComponent {

}
