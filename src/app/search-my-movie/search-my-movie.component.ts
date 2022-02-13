import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-my-movie',
  templateUrl: './search-my-movie.component.html',
  styleUrls: ['./search-my-movie.component.scss']
})
export class SearchMyMovieComponent implements OnInit {
  submittedAdvanced = false;

  constructor() { }

  ngOnInit(): void {
  }
  advancedSearch() {
    const btn = document.getElementById("btn") as HTMLInputElement;
    if (!this.submittedAdvanced) {
      this.submittedAdvanced = true;
      btn.innerHTML = "Fast search";
    }
    else {
      this.submittedAdvanced = false;
      btn.innerHTML = "Advanced Search";
    }
  }

}
