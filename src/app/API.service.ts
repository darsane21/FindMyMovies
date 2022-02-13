import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _obj:HttpClient) { }

  getMovieData(t:any){
    if(t==""){
      return this._obj.get('https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc');
    }else
      return this._obj.get('https://api.themoviedb.org/3/search/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&query='+t);
  }
}
