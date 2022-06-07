import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddKendaraanComponent } from './add-kendaraan/add-kendaraan.component';
import { ListKendaraanComponent } from './list-kendaraan/list-kendaraan.component';


const routes: Routes = [
  {
    path: "",
    component: ListKendaraanComponent
  },
  {
    path: "tambah-data",
    component: AddKendaraanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KendaraanRoutingModule { }
