import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VentasService {

    API_URL = environment.endpoint

    constructor(private _httpClient: HttpClient) { }

   listarVentas(): Observable<any>{
        return this._httpClient.get<any>(`${this.API_URL}/ventas/listar_ventas`);
    }

    obtenerVenta(id: number | null): Observable<any>{
        return this._httpClient.get<any>(`${this.API_URL}/ventas/obtener_ventas/${id}`);
    }

    editarVenta(id: number | null, data = {}): Observable<any>{
        return this._httpClient.put<any>(`${this.API_URL}/ventas/editar_ventas/${id}`, data);
    }

    eliminarVenta(id: number | null, data = {}): Observable<any>{
        return this._httpClient.delete<any>(`${this.API_URL}/ventas/eliminar_ventas/${id}`, data);
    }

    crearVenta(data = {}): Observable<any>{
        return this._httpClient.post<any>(`${this.API_URL}/ventas/agregar_ventas`, data);
    }
}
