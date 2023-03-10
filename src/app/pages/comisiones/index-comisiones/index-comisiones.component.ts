import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ComisionesService } from '../comisiones.service';

@Component({
  selector: 'app-index-comisiones',
  templateUrl: './index-comisiones.component.html',
  styleUrls: ['./index-comisiones.component.scss']
})
export class IndexComisionesComponent implements OnInit {
  constructor(
    private cd: ChangeDetectorRef,
    private _comisionesService: ComisionesService
  ) { }

  idAsesor: number | null = null
  mensaje: string = ''
  tipoMensaje: string = ''
  listadoComisiones: any = []
  mostrarAlerta: boolean = false
  cols: Array<string> = ['Nombre asesor', 'Comisión', 'Fecha']

  async ngOnInit(): Promise<void> {
    await this.cargarComisiones()
  }

  async cargarComisiones(): Promise<void>{
    this.listadoComisiones = await lastValueFrom(this._comisionesService.listarComisiones())
    console.log(this.listadoComisiones)
  }

  cargarAsesor(id: number | null){
    this.idAsesor = id
    this.cd.detectChanges()
  }

  obtenerMensaje(mensaje: any){
    console.log(mensaje)
    this.mensaje = mensaje.mensaje
    this.tipoMensaje = mensaje.tipo
    this.mostrarAlerta =  true
    setTimeout(() => {
      this.mostrarAlerta = false
    }, 3000);
  }

}
