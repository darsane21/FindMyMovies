import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { APIService } from '../API.service'

@Component({
  selector: 'app-form-find-my-movie',
  templateUrl: './form-find-my-movie.component.html',
  styleUrls: ['./form-find-my-movie.component.scss']
})
export class FormFindMyMovieComponent implements OnInit {
  SignupForm: any;
  data: any;
  submitted = false;
  name: any;

  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl()
      })
    });
  }

  onSubmit() {
    const btn = document.getElementById("main") as HTMLInputElement;
    btn.classList.toggle("h-auto");
    this.name = this.SignupForm["controls"]["userData"]["value"]["username"];
    this.submitted = true;
    this.api.getMovieData('https://api.themoviedb.org/3/search/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&query=' + this.name).subscribe(datas => {
      this.data = Array(datas)
      this.data = this.data[0]["results"];
    })
  }
}
