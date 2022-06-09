import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KlasemenModel } from 'src/app/model/klasemen';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private _http : HttpClient
  ) { }

  public save(value : KlasemenModel){
    return this._http.post(`${environment.uriApi}/api/pertandingan/save`, value, {observe: 'response'});
  }

  public getById(pertandinganId: number){
    return this._http.get(`${environment.uriApi}/api/pertandingan/`+pertandinganId)
  }

  public findAll(){
    return this._http.get(`${environment.uriApi}/api/pertandingan/findAll`, {observe: 'response'});
  }

  // public findAll(){
  //   return this._http.get(`${environment.uriApi}/api/pertandingan/findDesc`, {observe: 'response'});
  // }

  public update(value: KlasemenModel){
    return this._http.put(`${environment.uriApi}/api/pertandingan/update`,value);
  }

  public delete(pertandinganId: number){
    return this._http.delete<any>(`${environment.uriApi}/api/pertandingan/delete/`+pertandinganId)
  }
}
