import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../API.service'

@Component({
  selector: 'app-top-movie-p',
  templateUrl: './top-movie-p.component.html',
  styleUrls: ['./top-movie-p.component.scss']
})
export class TopMoviePComponent implements OnInit {

  @Input() findMyMovies!: any;
  data: any;

  constructor(private user: APIService) {
    this.user.getCustomerData().subscribe(data => {
      console.log(data);
      this.data = Array(data)
    })
  }
  ngOnInit(): void {
  }

}
