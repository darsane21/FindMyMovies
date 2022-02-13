import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-find-my-movie',
  templateUrl: './form-find-my-movie.component.html',
  styleUrls: ['./form-find-my-movie.component.scss']
})
export class FormFindMyMovieComponent implements OnInit {
  SignupForm: any;
  data:any;
  submitted = false;

  constructor() {
  }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl()
      })
    });
  }

  onSubmit() {
    this.data=this.SignupForm["controls"]["userData"]["value"]["username"];
    this.submitted = true;
  }
}
