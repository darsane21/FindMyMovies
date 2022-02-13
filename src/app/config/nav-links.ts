import { MyMoviesComponent } from '../my-movies/my-movies.component';
import { FormFindMyMovieComponent } from '../form-find-my-movie/form-find-my-movie.component';

export const routes = [
  {
    path: 'MyMovies',
    label: 'MyMovies route',
    component: MyMoviesComponent,
  },
  {
    path: 'RechercheMovie',
    label: 'RechercheMovie route',
    component: FormFindMyMovieComponent,
  }
];
