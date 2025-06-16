import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BaseDatosService } from '../base-datos.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

  constructor(private bd: BaseDatosService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const sesionActiva = await this.bd.existeSesionActiva();

    if (sesionActiva) {
      console.log('🔓 Acceso permitido: sesión activa');
      return true;
    } else {
      console.warn('🔐 Acceso denegado: sin sesión activa');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
