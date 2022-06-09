import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http : HttpClient
  ) { }

  public cekUsername(value: string){
    return this._http.get(`${environment.uriApi}/api/user/byUsername/`+value)
  }
}
