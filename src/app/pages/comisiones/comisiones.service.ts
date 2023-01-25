import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ComisionesService {

    API_URL = environment.endpoint

    constructor(private _httpClient: HttpClient) { }

    listarComisiones(): Observable<any>{
        return this._httpClient.get<any>(`${this.API_URL}/comisiones/listar_comisiones`);
    }
}
