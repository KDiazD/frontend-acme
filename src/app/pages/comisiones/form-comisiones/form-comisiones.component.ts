import { Component, Input, OnChanges, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AsesoresService } from '@app/pages/asesores/asesores.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-form-comisiones',
  templateUrl: './form-comisiones.component.html',
  styleUrls: ['./form-comisiones.component.scss']
})
export class FormComisionesComponent implements OnChanges {

  @Input() idAsesor: number | null = null
  @Output() mostrarAlerta = new EventEmitter<any>()

  listaNiveles = [
    'Junior',
    'Senior',
    'Máster',
  ]

  title: string
  frm!: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _asesoresService: AsesoresService
  ) {
    this.title = this.idAsesor ? 'Editar asesor' : 'Crear asesor'
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    this.cargarFormulario()
    if(this.idAsesor) this.cargarAsesor()
    if(!this.idAsesor) {
      this.frm.controls['nombre_asesor'].setValue(null)
      this.frm.controls['nivel_asesor'].setValue(null)
    }
  }

  cargarFormulario(){
    this.frm = this._formBuilder.group({
      nombre_asesor: new FormControl(null, Validators.compose([
        Validators.maxLength(150),
        Validators.minLength(3),
        Validators.required
      ])),
      nivel_asesor: new FormControl(null, Validators.compose([
        Validators.required
      ])),
    })
  }

  async cargarAsesor(): Promise<void> {
    const ASESOR = await lastValueFrom(this._asesoresService.obtenerAsesor(this.idAsesor))
    this.frm.controls['nombre_asesor'].setValue(ASESOR[0].Nombre_asesor)
    this.frm.controls['nivel_asesor'].setValue(ASESOR[0].Nivel_de_Experiencia)
  }

  async guardarAsesor(): Promise<void> {
    let response = null
    let data = {
      'nombre': this.frm.value.nombre_asesor,
      'nivel_experiencia_id': this.frm.value.nivel_asesor
    }

    if(this.idAsesor) {
      response = await lastValueFrom(this._asesoresService.editarAsesor(this.idAsesor, data))
    } else {
      response =  await lastValueFrom(this._asesoresService.crearAsesor(data))
    }

    this.mostrarAlerta.emit({
      mensaje: response.message,
      tipo: response.status
    })

  }
}
