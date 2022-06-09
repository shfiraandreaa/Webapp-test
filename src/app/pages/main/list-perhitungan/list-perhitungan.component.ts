import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KlasemenModel } from 'src/app/model/klasemen';
import { MainService } from '../main.service';

@Component({
  selector: 'app-list-perhitungan',
  templateUrl: './list-perhitungan.component.html',
  styleUrls: ['./list-perhitungan.component.css']
})
export class ListPerhitunganComponent implements OnInit {

  listHitung : any;

  constructor(
    private _service : MainService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.getDataKendaraan()
  }

  getDataKendaraan(){
    this._service.findAll().subscribe( 
      data  =>{
        console.log(data.body)
        this.listHitung = data.body
      }
    )
  }

  edit(klasemen: KlasemenModel){
    const id = klasemen.id
    this._router.navigate(["/","dashboard","perhitungan",id], {state: {data : klasemen} })
  }

}
