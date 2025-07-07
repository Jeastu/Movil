import { TestBed } from '@angular/core/testing';
import { BaseDatosService } from './base-datos.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock'; // Asegúrate que la ruta sea correcta

describe('BaseDatosService', () => {
  let service: BaseDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService
      ]
    });
    service = TestBed.inject(BaseDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
