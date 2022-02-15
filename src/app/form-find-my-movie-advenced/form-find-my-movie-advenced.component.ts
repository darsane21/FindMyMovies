import { Component, OnInit } from '@angular/core';
import { APIService } from "../API.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form-find-my-movie-advenced',
  templateUrl: './form-find-my-movie-advenced.component.html',
  styleUrls: ['./form-find-my-movie-advenced.component.scss']
})
export class FormFindMyMovieAdvencedComponent implements OnInit {

  SignupForm: any;
  data: any;
  submitted = false;
  name: any;
  year: any;

  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl()
      }),
      year: new FormGroup({
        yearNumber: new FormControl()
      })
    });
  }

  onSubmit() {
    const btn = document.getElementById("main") as HTMLInputElement;
    btn.classList.toggle("h-auto");
    this.year = this.SignupForm["controls"]["year"]["value"]["yearNumber"];
    this.name = this.SignupForm["controls"]["userData"]["value"]["username"];
    this.submitted = true;
    this.api.getMovieData('https://api.themoviedb.org/3/search/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&primary_release_year=' + this.year + '&query=' + this.name + '&sort_by=vote_average.desc').subscribe(datas => {
      this.data = Array(datas)
      this.data = this.data[0]["results"];
    })
  }
}
