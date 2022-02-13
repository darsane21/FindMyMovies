import { TopMoviePComponent } from '../top-movie-p/top-movie-p.component';
import { RechercheMoviePComponent } from '../recherche-movie-p/recherche-movie-p.component';

export const routes = [
  {
    path: 'TopMovie',
    label: 'TopMovie route',
    component: TopMoviePComponent,
  },
  {
    path: 'RechercheMovie',
    label: 'RechercheMovie route',
    component: RechercheMoviePComponent,
  }
];
