import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-index-ventas',
  templateUrl: './index-ventas.component.html',
  styleUrls: ['./index-ventas.component.scss']
})
export class IndexVentasComponent implements OnInit {
  constructor(
    private cd: ChangeDetectorRef,
    private _ventasService: VentasService
  ) { }

  idVenta: number | null = null
  mensaje: string = ''
  tipoMensaje: string = ''
  listadoVentas: any = []
  mostrarAlerta: boolean = false
  cols: Array<string> = ['Nombre asesor', 'Total venta', 'Fecha']

  async ngOnInit(): Promise<void> {
    await this.cargarVenta()
  }

  async cargarVenta(): Promise<void>{
    this.listadoVentas= await lastValueFrom(this._ventasService.listarVentas())
  }

  cargarVentaId(id: number | null){
    console.log(id)
    this.idVenta = id
    this.cd.detectChanges()
  }

  obtenerMensaje(mensaje: any){
    this.mensaje = mensaje.mensaje
    this.tipoMensaje = mensaje.tipo
    this.mostrarAlerta =  true
    this.cargarVenta()
    setTimeout(() => {
      this.mostrarAlerta = false
    }, 3000);
  }

  async eliminarVenta(id: number): Promise<void>{
    const RESPONSE = await lastValueFrom(this._ventasService.eliminarVenta(id))
    let mensaje = {
      mensaje: RESPONSE.message,
      tipo: 'success'
    }
    this.obtenerMensaje(mensaje)
  }

}
