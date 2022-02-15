import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { APIService } from '../API.service'
// @ts-ignore
import * as credential from '../credentials.json';

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
  novalues = false;

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
    this.novalues = false;
    const btn = document.getElementById("main") as HTMLInputElement;
    btn.classList.toggle("h-auto");
    this.name = this.SignupForm["controls"]["userData"]["value"]["username"];
    this.submitted = true;
    this.novalues = false;

    this.api.getMovieData('https://api.themoviedb.org/3/search/movie?api_key='+credential.default.APIKeys+'&query=' + this.name).subscribe(datas => {
      this.data = Array(datas)
      this.data = this.data[0]["results"];
      if(this.data.length==0)
        this.novalues = true;
    })
  }
}




