import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListKlasemenComponent } from './list-klasemen/list-klasemen.component';
import { AddDataKlasemenComponent } from './add-data-klasemen/add-data-klasemen.component';
import { PerhitunganKlasemenComponent } from './perhitungan-klasemen/perhitungan-klasemen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPerhitunganComponent } from './list-perhitungan/list-perhitungan.component';
import { MainService } from './main.service';


@NgModule({
  declarations: [
    ListKlasemenComponent, 
    AddDataKlasemenComponent, 
    PerhitunganKlasemenComponent, ListPerhitunganComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
