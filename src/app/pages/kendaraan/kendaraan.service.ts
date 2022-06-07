import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { kendaraanData } from 'src/app/model/kendaraan';

@Injectable({
  providedIn: 'root'
})
export class KendaraanService {

  constructor(
    private _http : HttpClient
  ) { }

  public save(value: kendaraanData) {
    return this._http.post("/url/api/kendaraan/save", value);
  }

  public findAll(){
    return this._http.get("/url/api/kendaraan/findAll")
  }

  public update(value: kendaraanData){
    return this._http.put("/url/api/kendaraan/update", value )
  }

  public delete(kendaraanId: number){
    return this._http.delete<any>("/url/api/kendaraan/delete/"+kendaraanId )
  }
}
