import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { PageComponent } from './page/page.component';
import { InicioComponent } from './page/inicio/inicio.component';


@NgModule({
  declarations: [
    PageComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
