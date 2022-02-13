import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service'

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  data:any;

  constructor(private api:APIService) {
    this.api.getMovieData("popularity","","").subscribe(datas=>{
      this.data=Array(datas)
      this.data=this.data[0]["results"];
    })
  }
  ngOnInit(): void {

  }

}
