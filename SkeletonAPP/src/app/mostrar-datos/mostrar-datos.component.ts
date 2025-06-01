import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss'],
  standalone: false
})
export class MostrarDatosComponent {
  @Input() nombre!: string;
  @Input() apellido!: string;
  @Input() nivel!: string;
  @Input() fechaNacimiento!: string;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
