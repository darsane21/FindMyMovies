import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _obj:HttpClient) { }

  getMovieData(t:any){
    if(t==""){
      //retourner un lien api qui prends les top 10 movies serial A FAIRE
      t="car";
      console.log("t est nul")
    }
    return this._obj.get('http://www.omdbapi.com/?apikey=7469e52c&t='+t+'\n')
  }
}
