import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../../base-datos.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
  standalone: false,
})
export class CertificacionesComponent implements OnInit {
  nombre = '';
  institucion = '';
  fecha = '';
  listaCertificaciones: any[] = [];

  constructor(private bd: BaseDatosService) {}

  ngOnInit() {
    this.bd.crearTablaCertificaciones();
    this.cargarCertificaciones();
  }

  async guardar() {
    if (this.nombre && this.institucion && this.fecha) {
      try {
        await this.bd.insertarCertificacion(this.nombre, this.institucion, this.fecha);
        this.nombre = '';
        this.institucion = '';
        this.fecha = '';
        this.cargarCertificaciones();
      } catch (error) {
        console.error('❌ Error al guardar certificación:', error);
      }
    } else {
      alert('Todos los campos son obligatorios.');
    }
  }

  async cargarCertificaciones() {
    this.listaCertificaciones = await this.bd.obtenerCertificaciones();
  }
}
