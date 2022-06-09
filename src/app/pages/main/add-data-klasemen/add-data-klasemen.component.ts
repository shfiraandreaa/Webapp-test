import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimService } from 'src/app/global/tim.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-add-data-klasemen',
  templateUrl: './add-data-klasemen.component.html',
  styleUrls: ['./add-data-klasemen.component.css']
})
export class AddDataKlasemenComponent implements OnInit {

  listTim: any;
  formData : FormGroup

  constructor(
    private _form : FormBuilder,
    private _global : TimService,
    private _service : MainService,
    private _router : Router
  ) { }

  ngOnInit(): void {

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

    this.getDataTim()
  }

  getDataTim(){
    this._global.getAllTim().subscribe(
      (resp)=>{
        console.log("==== Data Nama Tim ====", resp.body)
        this.listTim = resp.body
      }, error=>{
        console.log(error)
      }
    )
  }

  save(){
    const value = this.formData.value
    value
    console.log(value)
    this._service.save(value).subscribe(
      (resp)=>{
        alert("Data Pertandingan Tim Berhasil Disimpan")
        this._router.navigate(['/','dashboard'])
      },error=>{
        alert("Data Pertandingan Tim Gagal Disimpan")
        location.reload()
      }
    )
  }

}
