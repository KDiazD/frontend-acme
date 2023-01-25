import { Component, Input, OnChanges, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AsesoresService } from '@app/pages/asesores/asesores.service';
import { lastValueFrom } from 'rxjs';
import { VentasService } from '../ventas.service';


@Component({
  selector: 'app-form-ventas',
  templateUrl: './form-ventas.component.html',
  styleUrls: ['./form-ventas.component.scss']
})
export class FormVentasComponent  implements OnChanges {

  @Input() idVenta: number | null = null
  @Output() mostrarAlerta = new EventEmitter<any>()

  listaNiveles = [
    'Junior',
    'Senior',
    'Máster',
  ]

  title: string
  frm!: FormGroup

  listadoAsesores: any = []

  constructor(
    private _formBuilder: FormBuilder,
    private _asesoresService: AsesoresService,
    private _ventasService: VentasService
  ) {
    this.title = this.idVenta ? 'Editar venta' : 'Crear venta'
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    this.cargarAsesores()
    this.cargarFormulario()

    if(this.idVenta) this.cargarVentas()
    if(!this.idVenta) {
      this.frm.controls['id_asesor'].setValue(null)
      this.frm.controls['total_venta'].setValue(null)
    }
  }

  async cargarAsesores(){
    this.listadoAsesores = await lastValueFrom(this._asesoresService.listarAsesores())
    console.log(this.listadoAsesores)
  }

  cargarFormulario(){
    this.frm = this._formBuilder.group({
      id_asesor: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      total_venta: new FormControl(null, Validators.compose([
        Validators.required
      ])),
    })
  }

  async cargarVentas(): Promise<void> {
    console.log(this.idVenta)
    const VENTA = await lastValueFrom(this._ventasService.obtenerVenta(this.idVenta))
    console.log(VENTA[0].id_asesor)
    this.frm.controls['id_asesor'].setValue(VENTA[0].id_asesor)
    this.frm.controls['total_venta'].setValue(VENTA[0].total_venta)
  }

  async guardarVenta(): Promise<void> {
    let response = null
    let data = {
      'id_asesor': this.frm.value.id_asesor,
      'total_venta': this.frm.value.total_venta
    }

    if(this.idVenta) {
      response = await lastValueFrom(this._ventasService.editarVenta(this.idVenta, data))
    } else {
      response =  await lastValueFrom(this._ventasService.crearVenta(data))
    }

    this.mostrarAlerta.emit({
      mensaje: response.message,
      tipo: response.status
    })

    const div: any =  document.getElementById("closeModalButton")
    if(div) div.click();
  }
}
