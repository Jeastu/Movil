import { Component, OnInit } from '@angular/core';
import { ApiService, Usuario } from '../../services/api.service';

@Component({
  selector: 'app-api-local',
  templateUrl: './api-local.page.html',
  styleUrls: ['./api-local.page.scss'],
  standalone: false
})
export class ApiLocalPage implements OnInit {

  usuarios: Usuario[] = [];
  nuevoNombre = '';
  nuevoEmail = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.api.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

 agregarUsuario() {
  if (this.nuevoNombre && this.nuevoEmail) {
    const nuevo: Usuario = {
      id: 0,
      nombre: this.nuevoNombre,
      email: this.nuevoEmail
    };

    alert('🟡 Enviando: ' + JSON.stringify(nuevo)); // 👈

    this.api.agregarUsuario(nuevo).subscribe({
      next: () => {
        alert('✅ Usuario agregado correctamente');
        this.nuevoNombre = '';
        this.nuevoEmail = '';
        this.obtenerUsuarios();
      },
      error: err => {
  alert('❌ Error al agregar usuario:\n\n' +
    'Mensaje: ' + err.message + '\n' +
    'Status: ' + err.status + '\n' +
    'URL: ' + err.url);
}

    });
  } else {
    alert('⚠️ Debes ingresar nombre y email');
  }
}


  eliminarUsuario(id: number) {
    this.api.eliminarUsuario(id).subscribe(() => {
      this.obtenerUsuarios();
    });
  }
}
