import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  constructor(
    private _http: HttpClient
  ) { }

  public getAllTim(){
    return this._http.get(`${environment.uriApi}/api/tim/findAll`, {observe: 'response'})
  }
}
