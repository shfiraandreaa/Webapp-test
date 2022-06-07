import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { kendaraanData } from 'src/app/model/kendaraan';
import { KendaraanService } from '../kendaraan.service';

@Component({
  selector: 'app-add-kendaraan',
  templateUrl: './add-kendaraan.component.html',
  styleUrls: ['./add-kendaraan.component.css']
})
export class AddKendaraanComponent implements OnInit {

  formData: FormGroup;
  titlePage = 'Tambah Data Kendaraan';
  status = "Tambah Data Success";
  desc = "Simpan";
  kendaraan = new kendaraanData()
  btnUpdate = false;
  btnSimpan = true;


  constructor(
    private _formBuilder : FormBuilder,
    private _service : KendaraanService,
    private _router : Router
  ) { }

  ngOnInit(): void {

    if (history.state){
      const s = history.state
      if( s.data != undefined){
        this.kendaraan = history.state.data
        this.titlePage = "Edit Data Kendaraan"
        this.status = "Update Data Success"
        this.desc = "Update",
        this.btnUpdate = true
        this.btnSimpan = false
      }
    }
    
    this.formData = this._formBuilder.group({
      namaKendaraan : this._formBuilder.control("")
    })
  }

  save(){
    const value = this.formData.value
    this._service.save(value).subscribe(
      resp => {
        console.log(resp)
        // this._toastr.success('Berhasil', 'Data Berhasil Di Simpan');
        alert("Data Berhasil Ditambah")
        this._router.navigate([""])
      }, error =>{
        console.log(error)
        alert("Data Gagal Ditambah")
        // this._toastr.error('Gagal', 'Data Gagal Di Simpan');
      })
  }

  update(){
    const value = history.state.data;
    console.log(value)
    this._service.update(value).subscribe(
      resp => {
        console.log(resp)
        // this._toastr.success('Berhasil', 'Data Berhasil Di Simpan');
        alert("Data Berhasil Diupdate")
        this._router.navigate([""])
      }, error =>{
        console.log(error)
        alert("Data Gagal Diupdate")
        // this._toastr.error('Gagal', 'Data Gagal Di Simpan');
      })
  }

}
