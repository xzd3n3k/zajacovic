import { Routes } from '@angular/router';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {AboutScreenComponent} from './about-screen/about-screen.component';
import {ShowcaseScreenComponent} from './showcase-screen/showcase-screen.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeScreenComponent,
  },
  {
    path: 'showcase',
    component: ShowcaseScreenComponent,
  },
  {
    path: 'about',
    component: AboutScreenComponent,
  }
];
