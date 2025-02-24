import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/components/home/home.component';
import { AboutComponent } from './layouts/components/about/about.component';
export const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
];
