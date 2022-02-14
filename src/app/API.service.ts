import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _obj: HttpClient) { }

  getMovieData(link:any) {
    return this._obj.get(link);
  }
}
