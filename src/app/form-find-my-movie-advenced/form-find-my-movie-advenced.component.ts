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
  novalues = false;
  name: any;
  year: any;
  language:any;
  link:any;
  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.novalues = false;
    this.SignupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(),
        yearNumber: new FormControl(),
        language : new FormControl()
      })
    });
  }

  onSubmit() {
    const btn = document.getElementById("main") as HTMLInputElement;
    btn.classList.toggle("h-auto");
    this.year = this.SignupForm["controls"]["userData"]["value"]["yearNumber"];
    this.name = this.SignupForm["controls"]["userData"]["value"]["username"];
    this.language = this.SignupForm["controls"]["userData"]["value"]["language"];

    this.submitted = true;
    this.novalues = false;
    this.link='https://api.tmdb.org/3/search/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&query='+this.name+'&year='+this.year+'&language='+this.language

    this.api.getMovieData(this.link).subscribe(datas => {
    this.data = Array(datas)
    this.data = this.data[0]["results"];
    console.log(this.data);
    if(this.data.length==0)
      this.novalues = true;
    })
  }
}
