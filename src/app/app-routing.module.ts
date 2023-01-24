import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAsesoresComponent } from './pages/asesores/form-asesores/form-asesores.component';
import { IndexAsesoresComponent } from './pages/asesores/index-asesores/index-asesores.component';
import { IndexComisionesComponent } from './pages/comisiones/index-comisiones/index-comisiones.component';
import { FormVentasComponent } from './pages/ventas/form-ventas/form-ventas.component';
import { IndexVentasComponent } from './pages/ventas/index-ventas/index-ventas.component';

const routes: Routes = [
   /* ASESORES */
   { path: 'asesores', component: IndexAsesoresComponent },
   { path: 'asesores/editar/:id', component: FormAsesoresComponent },
   { path: 'asesores/crear/', component: FormAsesoresComponent },
   /* COMISIONES */
   { path: 'comisiones', component: IndexComisionesComponent },
   { path: 'comisiones/editar/:id', component: FormAsesoresComponent },
   { path: 'comisiones/crear/', component: FormAsesoresComponent },
   /* VENTAS */
   { path: 'ventas', component: IndexVentasComponent },
   { path: 'ventas/editar/:id', component: FormVentasComponent },
   { path: 'ventas/crear/', component: FormVentasComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
