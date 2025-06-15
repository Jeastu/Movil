import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BaseDatosService } from './base-datos.service'; // Ajusta si está en otra carpeta
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private baseDatosService: BaseDatosService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      try {
        await this.baseDatosService.inicializarBD();
        console.log('📦 Base de datos inicializada correctamente');

        const sesionActiva = await this.baseDatosService.existeSesionActiva();
        if (sesionActiva) {
          this.router.navigate(['/home']); // Redirige si ya hay sesión activa
        }
      } catch (err) {
        console.error('❌ Error al inicializar la base de datos:', err);
      }
    });
  }
}
