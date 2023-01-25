import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AsesoresService } from '@app/pages/asesores/asesores.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-index-inicio',
  templateUrl: './index-inicio.component.html',
  styleUrls: ['./index-inicio.component.scss']
})
export class IndexInicioComponent implements OnInit {
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
    this.listadoAsesores = await lastValueFrom(this._asesoresService.listarAsesores())
  }

  cargarAsesor(id: number | null){
    this.idAsesor = id
    this.cd.detectChanges()
  }

  obtenerMensaje(mensaje: any){
    this.mensaje = mensaje.mensaje
    this.tipoMensaje = mensaje.tipo
    this.mostrarAlerta =  true
    setTimeout(() => {
      this.mostrarAlerta = false
    }, 3000);
  }

}
