import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../../base-datos.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
  standalone: false,
})
export class MisDatosComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  nivel: string = '';
  fecha: string = '';

  modalAbierto: boolean = false;
  datosGuardados: any[] = [];

  constructor(private bd: BaseDatosService) {}

  ngOnInit() {
    this.bd.crearTablaMisDatos();
    this.cargarDatos();
  }

  async guardar() {
    if (this.nombre && this.apellido && this.nivel && this.fecha) {
      try {
        await this.bd.insertarMisDatos(this.nombre, this.apellido, this.nivel, this.fecha);
        this.limpiar();
        this.cargarDatos();
      } catch (error) {
        console.error('❌ Error al guardar datos:', error);
      }
    } else {
      alert('Todos los campos son obligatorios.');
    }
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivel = '';
    this.fecha = '';
  }

  async cargarDatos() {
    try {
      this.datosGuardados = await this.bd.obtenerMisDatos();
    } catch (error) {
      console.error('❌ Error al cargar datos:', error);
      this.datosGuardados = [];
    }
  }

  mostrar() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }
}
