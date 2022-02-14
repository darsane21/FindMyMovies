import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service'

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  data: any;

  constructor(private api: APIService) {
    this.api.getMovieData('https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc').subscribe(datas => {
      this.data = Array(datas)
      this.data = this.data[0]["results"];
    })
  }
  ngOnInit(): void {

  }

}
