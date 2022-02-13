import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './base/nav-bar/nav-bar.component';
import { FooterComponent } from './base/footer/footer.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { FormFindMyMovieComponent } from './form-find-my-movie/form-find-my-movie.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { AllMoviesComponent } from './all-movies/all-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MyMoviesComponent,
    FormFindMyMovieComponent,
    AllMoviesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
