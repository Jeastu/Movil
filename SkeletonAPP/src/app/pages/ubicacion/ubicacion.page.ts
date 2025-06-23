import { Component, OnDestroy, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
  standalone: false
})
export class UbicacionPage implements OnInit, OnDestroy {
  latitud: number | null = null;
  longitud: number | null = null;
  mapa: any;

  async ngOnInit() {
    await this.obtenerUbicacion();
  }

  async obtenerUbicacion() {
  const coordinates = await Geolocation.getCurrentPosition();
  this.latitud = coordinates.coords.latitude;
  this.longitud = coordinates.coords.longitude;

  this.verUbicacion = true; // ← esta línea activa la sección del HTML

  this.inicializarMapa(this.latitud, this.longitud);
  
}
  verUbicacion: boolean = false;

  inicializarMapa(lat: number, lng: number) {
    this.mapa = L.map('mapa').setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.mapa);

    L.marker([lat, lng]).addTo(this.mapa)
      .bindPopup('¡Estás aquí!')
      .openPopup();
  }

  ngOnDestroy(): void {
    if (this.mapa) {
      this.mapa.remove();
    }
  }
}
