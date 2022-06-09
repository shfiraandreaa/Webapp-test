import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDataKlasemenComponent } from './add-data-klasemen/add-data-klasemen.component';
import { ListKlasemenComponent } from './list-klasemen/list-klasemen.component';
import { ListPerhitunganComponent } from './list-perhitungan/list-perhitungan.component';
import { PerhitunganKlasemenComponent } from './perhitungan-klasemen/perhitungan-klasemen.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ListKlasemenComponent
  },
  {
    path: "data",
    component: AddDataKlasemenComponent
  },
  {
    path: "list-perhitungan",
    component: ListPerhitunganComponent
  },
  {
    path: "perhitungan/:id",
    component: PerhitunganKlasemenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
