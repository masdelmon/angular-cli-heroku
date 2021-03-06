import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubrouteComponent } from './subroute/subroute.component';
import { ROUTES } from './app.routes';

import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video.component';
import { ExperiencesComponent } from './experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    SubrouteComponent,
    HomeComponent,
    VideoComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
