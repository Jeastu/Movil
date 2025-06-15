import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../../base-datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
  standalone: false
})
export class ExperienciaLaboralComponent implements OnInit {
  empresa: string = '';
  cargo: string = '';
  fechaInicio: string = '';
  fechaTermino: string = '';
  listaExperiencia: any[] = [];

  constructor(private bd: BaseDatosService) {}

  ngOnInit() {
  this.bd.crearTablaExperienciaLaboral();
  this.cargarExperiencias();
}


  async guardar() {
    if (this.empresa && this.cargo && this.fechaInicio && this.fechaTermino) {
      try {
        await this.bd.insertarExperienciaLaboral(
          this.empresa,
          this.cargo,
          this.fechaInicio,
          this.fechaTermino
        );
        this.empresa = '';
        this.cargo = '';
        this.fechaInicio = '';
        this.fechaTermino = '';
        this.cargarExperiencias();
      } catch (error) {
        console.error('❌ Error al guardar experiencia:', error);
      }
    } else {
      alert('Todos los campos son obligatorios.');
    }
  }

  async cargarExperiencias() {
    try {
      this.listaExperiencia = await this.bd.obtenerExperienciaLaboral();
    } catch (error) {
      console.error('❌ Error al cargar experiencias:', error);
    }
  }
}
