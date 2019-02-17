import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubrouteComponent } from './subroute/subroute.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'subroute', component: SubrouteComponent },
  { path: 'experience', component: SubrouteComponent },
  { path: 'video', component: SubrouteComponent }
];
