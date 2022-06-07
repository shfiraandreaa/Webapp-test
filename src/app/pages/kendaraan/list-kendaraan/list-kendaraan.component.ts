import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { kendaraanData } from 'src/app/model/kendaraan';
import { KendaraanService } from '../kendaraan.service';

@Component({
  selector: 'app-list-kendaraan',
  templateUrl: './list-kendaraan.component.html',
  styleUrls: ['./list-kendaraan.component.css']
})
export class ListKendaraanComponent implements OnInit {

  listKendaraan : any;
  
  constructor(
    private _router : Router,
    private _service : KendaraanService

  ) { }

  ngOnInit(): void {
    this.getDataKendaraan()
  }

  getDataKendaraan(){
    this._service.findAll().subscribe( 
      data  =>{
        console.log(data)
        this.listKendaraan = data
      }
    )
  }

  edit(kendaraan: kendaraanData){
    console.log(kendaraan)
    this._router.navigate(["/tambah-data"], {state: {data : kendaraan} })
  }

  delete(kendaraan: kendaraanData){
    this._service.delete(kendaraan.id).subscribe(
      data => {
        alert("Data Kendaraan dengan Id : " + kendaraan.id + " Nama Kendaraan is : " + kendaraan.namaKendaraan + " Berhasil di Hapus")
        this.getDataKendaraan()
      }, error => {
        console.log(error)
      }
    )
  }
}
