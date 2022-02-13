import { Component, OnInit, Input } from '@angular/core';
import {APIService} from '../api.service'

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  data:any;
  @Input() name: any;

  constructor(private api:APIService) {
  }
  ngOnInit(): void {
    console.log("rr");

    this.api.getMovieData(name).subscribe(data=>{
      this.data=Array(data)
    })
  }


}
