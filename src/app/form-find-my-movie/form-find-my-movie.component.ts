import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {APIService} from '../api.service'

@Component({
  selector: 'app-form-find-my-movie',
  templateUrl: './form-find-my-movie.component.html',
  styleUrls: ['./form-find-my-movie.component.scss']
})
export class FormFindMyMovieComponent implements OnInit {
  SignupForm: any;
  data:any;
  submitted = false;
  submittedAdvanced = false;
  name:any;

  constructor(private api:APIService) {
  }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl()
      })
    });
  }

  onSubmit() {
    this.name=this.SignupForm["controls"]["userData"]["value"]["username"];
    console.log(this.SignupForm);
    this.submitted = true;
    this.api.getMovieData("title", this.name, "").subscribe(datas=>{
      this.data=Array(datas)
      this.data=this.data[0]["results"];
    })
  }

  advancedSearch(){
    if(this.submittedAdvanced == false)
      this.submittedAdvanced = true;
    else
      this.submittedAdvanced = false;
  }
}
