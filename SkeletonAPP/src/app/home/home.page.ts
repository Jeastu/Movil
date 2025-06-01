import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MostrarDatosComponent } from '../mostrar-datos/mostrar-datos.component'; // ajusta la ruta si es necesario



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivel: string = '';
  fechaNacimiento: string = '';

  constructor(private router: Router, private alertCtrl: AlertController,private modalCtrl: ModalController) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as any;
    if (state?.datos?.usuario) {
      this.usuario = state.datos.usuario;
    }
  }

  limpiar() {
  // Paso 1: animar los ion-item (NO se borran valores todavía)
  this.animarInput('nombreItem');
  this.animarInput('apellidoItem');

  // Paso 2: esperar 1 segundo y luego borrar los datos
  setTimeout(() => {
    this.nombre = '';
    this.apellido = '';
    this.nivel = '';
    this.fechaNacimiento = '';
  }, 1000);
}

animarInput(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('animar-input');
    void el.offsetWidth; // Forzar reinicio
    el.classList.add('animar-input');

    setTimeout(() => {
      el.classList.remove('animar-input');
    }, 1000);
  }
}









async mostrar() {
  const modal = await this.modalCtrl.create({
    component: MostrarDatosComponent,
    componentProps: {
      nombre: this.nombre,
      apellido: this.apellido,
      nivel: this.nivel,
      fechaNacimiento: this.formatearFecha(this.fechaNacimiento)
    }
  });

  await modal.present();
}


formatearFecha(fecha: any): string {
  if (!fecha) return 'No ingresada';
  const f = new Date(fecha);
  const dia = f.getDate().toString().padStart(2, '0');
  const mes = (f.getMonth() + 1).toString().padStart(2, '0');
  const anio = f.getFullYear();
  return `${dia}/${mes}/${anio}`;
}
}
