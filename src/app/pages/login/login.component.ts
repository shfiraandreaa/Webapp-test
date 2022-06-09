import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/model/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup
  userData : any;

  constructor(
    private _form : FormBuilder,
    private _router : Router,
    private _service : LoginService
  ) { }

  ngOnInit(): void {

    this.formLogin = this._form.group({
      username : this._form.control(""),
      password : this._form.control("")
    })
  }

  login(){
    const value = this.formLogin.get('username').value;
    console.log(value)
    this._service.cekUsername(value).subscribe(
      (resp)=>{
        if(resp == null){
          alert("Data Anda Tidak Cocok Silahkan Isi Kembali Username dan Password Jika Belum Memiliki Akun Silahkan Lakukan Registrasi")
        location.reload()
        }else{
          this.userData = this.formLogin.get('username').value
          localStorage.setItem('currentUser',this.userData)
          this._router.navigate(['/','dashboard'])
        }
      },error=>{
        alert("Data Anda Tidak Cocok Silahkan Isi Kembali Username dan Password Jika Belum Memiliki Akun Silahkan Lakukan Registrasi")
        location.reload()
      }
    )
  }

}
