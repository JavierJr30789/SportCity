import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { FutbolComponent } from './pages/futbol/futbol.component';
import { VoleyComponent } from './pages/voley/voley.component';
import { BasquetComponent } from './pages/basquet/basquet.component';


@NgModule({
  declarations: [    
    OfertasComponent,
    FutbolComponent,
    VoleyComponent,
    BasquetComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
