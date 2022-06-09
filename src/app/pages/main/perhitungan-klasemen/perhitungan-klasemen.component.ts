import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimService } from 'src/app/global/tim.service';
import { KlasemenModel } from 'src/app/model/klasemen';
import { MainService } from '../main.service';

@Component({
  selector: 'app-perhitungan-klasemen',
  templateUrl: './perhitungan-klasemen.component.html',
  styleUrls: ['./perhitungan-klasemen.component.css']
})
export class PerhitunganKlasemenComponent implements OnInit {

  data = false;
  listTim: any;
  formData : FormGroup
  klasemen = new KlasemenModel();
  allData: any;

  constructor(
    private _form : FormBuilder,
    private _router : Router,
    private _global : TimService,
    private _service : MainService
  ) { }

  ngOnInit(): void {
    // console.log(history.state.data)
    if(history.state.data == undefined){
      this._router.navigate(['/','dashboard'])
    }
    this.allData = history.state.data
    console.log(this.allData)
    this.data;
    // this.getDataTim()

    this.formData = this._form.group({
      namaTim : this._form.control(null),
      menang : this._form.control(null),
      seri : this._form.control(null),
      kalah : this._form.control(null),
      golMenang : this._form.control(null),
      golKalah : this._form.control(null),
      selisihGol : this._form.control(0),
      jumlahPoint : this._form.control(0),
      jumlahPertandingan : this._form.control(0)
    })

  }

  hitungTanding(){
    const value1 = this.allData.menang;
    const value2 = this.allData.seri;
    const value3 = this.allData.kalah;
    const hitung = value1 + value2 + value3;
    console.log(hitung)
    this.allData.jumlahPertandingan = hitung;
  }

  hitungSelisihGol(){
    const value1 = this.allData.golMenang;
    const value2 = this.allData.golKalah;
    const hitung = value1 - value2;
    console.log(hitung)
    this.allData.selisihGol = hitung;
  }
  
  hitungPoint(){
    const value1 = this.allData.menang;
    const value2 = this.allData.seri;
    const hitung = 3 * value1 + value2;
    console.log(hitung)
    this.allData.jumlahPoint = hitung;
  }

  // getDataTim(){
  //   this._global.getAllTim().subscribe(
  //     (resp)=>{
  //       console.log("==== Data Nama Tim ====", resp.body)
  //       this.listTim = resp.body
  //     }, error=>{
  //       console.log(error)
  //     }
  //   )
  // }

  // getDataPerTim(){
  //   const id = this.formData.get('idTim').value;
  //   console.log(id)
  // }

  update(){
    const value : KlasemenModel = this.allData
    value.menang = this.formData.get('menang').value
    value.kalah = this.formData.get('kalah').value
    value.seri = this.formData.get('seri').value
    console.log(value)
    this._service.update(value).subscribe(
      (resp)=>{
        alert("Perhitungan Berhasil Dilakukan")
        this._router.navigate(['/','dashboard'])
      },error => {
        alert("Perhitungan Gagal Dilakukan")
      }
    )
  }


}
