import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BaseDatosService } from './base-datos.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock'; // Asegúrate de que exista y esté bien escrito

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
