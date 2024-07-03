import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"singin",component:SinginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
