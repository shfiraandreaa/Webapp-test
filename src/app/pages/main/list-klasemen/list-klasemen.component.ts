import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KlasemenModel } from 'src/app/model/klasemen';
import { MainService } from '../main.service';

@Component({
  selector: 'app-list-klasemen',
  templateUrl: './list-klasemen.component.html',
  styleUrls: ['./list-klasemen.component.css']
})
export class ListKlasemenComponent implements OnInit {

  listData : any = [];
  user : any;
  btnEdit = true;
  umum = true;

  constructor(
    private _service : MainService,
    private _router : Router
  ) { }

  ngOnInit(): void {

    this.cekUser()
    this.getData()
  }

  getData(){
    this._service.findAll().subscribe(
      (resp)=>{
        this.listData = resp.body
        console.log(this.listData)
      }
    )
  }

  logout(){
    localStorage.removeItem('currentUser')
    this._router.navigate(['/'])
  }

  cekUser(){
    this.user = localStorage.getItem('currentUser')
    console.log(this.user)
   if(this.user !="admin"){
     this.btnEdit = false
     this.umum = true
   }else{
     this.btnEdit = true;
     this.umum = false;
   }

  }

  edit(klasemen: KlasemenModel){
    const id = klasemen.id
    this._router.navigate(["/","dashboard","perhitungan",id], {state: {data : klasemen} })
  }

}
