import { Component, OnInit, Input } from '@angular/core';
import {APIService} from '../api.service'

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }
  ngOnInit(): void {

  }


}
