import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock';
import { BaseDatosService } from '../base-datos.service';
import { CommonModule } from '@angular/common';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [CommonModule],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService,
        { provide: Router, useValue: { getCurrentNavigation: () => ({ extras: { state: { datos: { usuario: 'test' } } } }) } }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
