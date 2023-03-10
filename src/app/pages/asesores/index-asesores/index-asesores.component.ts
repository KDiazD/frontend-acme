import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AsesoresService } from '../asesores.service';

@Component({
  selector: 'app-index-asesores',
  templateUrl: './index-asesores.component.html',
  styleUrls: ['./index-asesores.component.scss']
})
export class IndexAsesoresComponent implements OnInit {
  constructor(
    private cd: ChangeDetectorRef,
    private _asesoresService: AsesoresService
  ) { }

  idAsesor: number | null = null
  mensaje: string = ''
  tipoMensaje: string = ''
  listadoAsesores: any = []
  mostrarAlerta: boolean = false
  cols: Array<string> = ['Nombre asesor', 'Nivel de Experiencia']

  async ngOnInit(): Promise<void> {
    await this.cargarAsesores()
  }

  async cargarAsesores(): Promise<void>{
    this.listadoAsesores = []
    this.listadoAsesores = await lastValueFrom(this._asesoresService.listarAsesores())
  }

  cargarAsesor(id: number | null){
    this.idAsesor = id
    this.cd.detectChanges()
  }

  async eliminarAsesores(id: number): Promise<void>{
    const RESPONSE = await lastValueFrom(this._asesoresService.eliminarAsesor(id))
    let mensaje = {
      mensaje: RESPONSE.message,
      tipo: 'success'
    }
    this.obtenerMensaje(mensaje)
  }

  obtenerMensaje(mensaje: any){
    this.mensaje = mensaje.mensaje
    this.tipoMensaje = mensaje.tipo
    this.mostrarAlerta =  true
    this.cargarAsesores()
    setTimeout(() => {
      this.mostrarAlerta = false
    }, 3000);
  }

}
