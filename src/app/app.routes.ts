import { Routes } from '@angular/router';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {AboutScreenComponent} from './about-screen/about-screen.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeScreenComponent,
    title: 'Zajacovič Exhaust Systems'
  },
  {
    path: 'about',
    component: AboutScreenComponent,
    title: 'Zajacovič Exhaust Systems'
  }
];
