import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { SearchMyMovieComponent } from '../search-my-movie/search-my-movie.component';
import { HomeComponent } from '../home/home.component';

export const routes = [
  {
    path: '',
    label: 'Home route',
    component: HomeComponent,
  },
  {
    path: 'AllMovies',
    label: 'AllMovies route',
    component: AllMoviesComponent,
  },
  {
    path: 'RechercheMovie',
    label: 'RechercheMovie route',
    component: SearchMyMovieComponent,
  }
];
