import { TestBed } from '@angular/core/testing';
import { SesionGuard } from './sesion.guard';
import { BaseDatosService } from '../base-datos.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock'; // Ajusta ruta si es distinta

describe('SesionGuard', () => {
  let guard: SesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SesionGuard,
        BaseDatosService,
        { provide: SQLite, useClass: SQLiteMock } // ✅ Mock agregado
      ]
    });
    guard = TestBed.inject(SesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
