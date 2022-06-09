import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path: "registrasi",
    loadChildren:()=>import('../register/register.module').then(mod=>mod.RegisterModule)
  },
  {
    path:"dashboard",
    loadChildren:()=>import('../main/main.module').then(mod=>mod.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
