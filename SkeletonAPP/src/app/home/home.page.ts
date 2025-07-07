import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDatosService } from '../base-datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  usuario: string = '';
  componenteActual = 'mis-datos';
 // para mostrar componente seleccionado

  constructor(private router: Router, private bd: BaseDatosService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as any;
    if (state?.datos?.usuario) {
      this.usuario = state.datos.usuario;
    }
  }

  mostrar(componente: string) {
    this.componenteActual = componente;
  }

  async cerrarSesion() {
    await this.bd.cerrarSesion(this.usuario);
    this.router.navigate(['/login']);
  }
  
}
