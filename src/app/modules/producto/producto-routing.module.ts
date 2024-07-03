import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasquetComponent } from './pages/basquet/basquet.component';
import { FutbolComponent } from './pages/futbol/futbol.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { VoleyComponent } from './pages/voley/voley.component';

const routes: Routes = [
  {
    path:"basquet",component:BasquetComponent
  },
  {
    path:"futbol",component:FutbolComponent
  },
  {
    path:"ofertas",component:OfertasComponent
  },
  {
    path:"voley",component:VoleyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
