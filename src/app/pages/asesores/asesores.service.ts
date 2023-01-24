import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AsesoresService {

    API_URL = environment.endpoint

    constructor(private _httpClient: HttpClient) { }

    listarAsesores(): Observable<any>{
        return this._httpClient.get<any>(`${this.API_URL}/asesorescomerciales/listar_asesores`);
    }

    obtenerAsesor(id: number | null): Observable<any>{
        return this._httpClient.get<any>(`${this.API_URL}/asesorescomerciales/obtener_asesor/${id}`);
    }

    editarAsesor(id: number | null, data = {}): Observable<any>{
        return this._httpClient.put<any>(`${this.API_URL}/asesorescomerciales/editar_asesores/${id}`, data);
    }

    crearAsesor(data = {}): Observable<any>{
        return this._httpClient.post<any>(`${this.API_URL}/asesorescomerciales/agregar_asesores/`, data);
    }
}
