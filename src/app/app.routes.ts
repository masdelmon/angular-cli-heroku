import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubrouteComponent } from './subroute/subroute.component';/*
import { VideoComponent } from './video.component';*/
import { ExperiencesComponent } from './experiences.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'subroute', component: SubrouteComponent },
  { path: 'experiences', component: ExperiencesComponent }/*,
  { path: 'video', component: VideoComponent }*/
];
