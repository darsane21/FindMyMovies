import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { FormFindMyMovieComponent } from '../form-find-my-movie/form-find-my-movie.component';

export const routes = [
  {
    path: 'AllMovies',
    label: 'AllMovies route',
    component: AllMoviesComponent,
  },
  {
    path: 'RechercheMovie',
    label: 'RechercheMovie route',
    component: FormFindMyMovieComponent,
  }
];
