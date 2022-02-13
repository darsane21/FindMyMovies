import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
