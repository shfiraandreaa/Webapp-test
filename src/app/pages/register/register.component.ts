import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrasiService } from './registrasi.service';

// declare var require;
// const Swal = require('sweetalert2');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegis : FormGroup;
  
  constructor(
    private _form : FormBuilder,
    private _service : RegistrasiService,
    private _rout : Router 
  ) { }

  ngOnInit(): void {

    this.formRegis = this._form.group({
      namaDepan: this._form.control(null),
      namaBelakang: this._form.control(null),
      username: this._form.control(null),
      password: this._form.control(null),
      userType: this._form.control("Umum")
    })
  }

  regis(){
    const value = this.formRegis.value;
    this._service.save(value).subscribe(
      (resp)=>{
        console.log(resp)
        alert("Registrasi Berhasil")
        this._rout.navigate(['/'])
        // const swalWithBootstrapButtons = Swal.mixin({
        //   customClass: {
        //     confirmButton: 'btn btn-success',
        //     cancelButton: 'btn btn-danger'
        //   },
        //   buttonsStyling: false,
        // });
        // swalWithBootstrapButtons.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'Registrasi Berhasil',
        //   confirmButtonText: 'OK',
        //   showConfirmButton: true,
        //   timer: 1500
        // }).then((result) => {
        //     this._rout.navigate(['/','dashboard']);
        // });
      }
    )
  }

}
