import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service'
// @ts-ignore
import * as credential from '../credentials.json';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  data: any;

  constructor(private api: APIService) {
    this.api.getMovieData('https://api.themoviedb.org/3/discover/movie?api_key='+credential.default.APIKeys+'&sort_by=popularity.desc').subscribe(datas => {
      this.data = Array(datas)
      this.data = this.data[0]["results"];
      console.log(this.data);
    })
  }
  ngOnInit(): void {

  }

}
