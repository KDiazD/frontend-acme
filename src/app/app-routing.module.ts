import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAsesoresComponent } from './pages/asesores/form-asesores/form-asesores.component';
import { IndexAsesoresComponent } from './pages/asesores/index-asesores/index-asesores.component';
import { IndexComisionesComponent } from './pages/comisiones/index-comisiones/index-comisiones.component';
import { IndexInicioComponent } from './pages/inicio/index-inicio/index-inicio.component';
import { FormVentasComponent } from './pages/ventas/form-ventas/form-ventas.component';
import { IndexVentasComponent } from './pages/ventas/index-ventas/index-ventas.component';

const routes: Routes = [
   /* INICIO */
   { path: '', component: IndexInicioComponent },
   /* ASESORES */
   { path: 'asesores', component: IndexAsesoresComponent },
   /* COMISIONES */
   { path: 'comisiones', component: IndexComisionesComponent },
   /* VENTAS */
   { path: 'ventas', component: IndexVentasComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
