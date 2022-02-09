import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './base/nav-bar/nav-bar.component';
import { FooterComponent } from './base/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { FormFindMyMovieComponent } from './form-find-my-movie/form-find-my-movie.component';
import { TopMoviePComponent } from './top-movie-p/top-movie-p.component';
import { RechercheMoviePComponent } from './recherche-movie-p/recherche-movie-p.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MyMoviesComponent,
    FormFindMyMovieComponent,
    TopMoviePComponent,
    RechercheMoviePComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
