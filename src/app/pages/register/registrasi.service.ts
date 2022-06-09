import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisModel } from 'src/app/model/regis';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrasiService {

  constructor(
    private _http : HttpClient
  ) { }

    public save(value: RegisModel){
      return this._http.post(`${environment.uriApi}/api/user/save`, value, {observe: 'response'});
    }

}
