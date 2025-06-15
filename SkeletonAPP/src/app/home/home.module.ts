import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MisDatosComponent } from '../componentes/mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from '../componentes/experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../componentes/certificaciones/certificaciones.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  declarations: [
    HomePage,
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent  // 👈 asegúrate de que estén los tres aquí
  ]
})
export class HomePageModule {}
