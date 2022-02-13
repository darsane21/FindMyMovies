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
    this.api.getMovieData("").subscribe(datas => {
      this.data = Array(datas)
      console.log(this.data.valueOf());
      this.data = this.data[0]["results"];
      //console.log(this.data.valueOf());
      //console.log(this.data[0]["results"]);
    })
  }
  ngOnInit(): void {

  }

}