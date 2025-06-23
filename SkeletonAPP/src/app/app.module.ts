import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Si algún día necesitas forzar el registro del servicio:
// import { BaseDatosService } from './base-datos.service';

@NgModule({
  declarations: [AppComponent, MostrarDatosComponent],
  imports: [
    IonicStorageModule.forRoot(),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule  // ✅ Necesario para el login con formBuilder
  ],
  providers: [[Camera],
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite
    // BaseDatosService  // (opcional, solo si no funciona con providedIn: 'root')
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
