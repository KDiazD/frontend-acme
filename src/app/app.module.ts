import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexAsesoresComponent } from './pages/asesores/index-asesores/index-asesores.component';
import { FormAsesoresComponent } from './pages/asesores/form-asesores/form-asesores.component';
import { IndexComisionesComponent } from './pages/comisiones/index-comisiones/index-comisiones.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormComisionesComponent } from './pages/comisiones/form-comisiones/form-comisiones.component';
import { IndexVentasComponent } from './pages/ventas/index-ventas/index-ventas.component';
import { FormVentasComponent } from './pages/ventas/form-ventas/form-ventas.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './config/http.interceptor';
import { CustomErrorFactory } from './config/custom-errors.config';
import {
  NgBootstrapFormValidationModule,
  CUSTOM_ERROR_MESSAGES
} from "ng-bootstrap-form-validation";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexAsesoresComponent,
    FormAsesoresComponent,
    IndexComisionesComponent,
    HeaderComponent,
    MenuComponent,
    FormComisionesComponent,
    IndexVentasComponent,
    FormVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot(),
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    },
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useFactory: CustomErrorFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
