import { Routes } from '@angular/router';
import {HomeScreenComponent} from './home-screen/home-screen.component';

export const routes: Routes = [
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {
    'path': 'home',
    component: HomeScreenComponent,
  },
];
