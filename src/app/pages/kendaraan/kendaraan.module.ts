import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KendaraanRoutingModule } from './kendaraan-routing.module';
import { AddKendaraanComponent } from './add-kendaraan/add-kendaraan.component';
import { ListKendaraanComponent } from './list-kendaraan/list-kendaraan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KendaraanService } from './kendaraan.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddKendaraanComponent, ListKendaraanComponent],
  imports: [
    CommonModule,
    KendaraanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    KendaraanService
  ]
})
export class KendaraanModule { }
