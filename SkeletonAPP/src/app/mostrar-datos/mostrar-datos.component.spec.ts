import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MostrarDatosComponent } from './mostrar-datos.component';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock';
import { BaseDatosService } from '../base-datos.service';
import { CommonModule } from '@angular/common';

describe('MostrarDatosComponent', () => {
  let component: MostrarDatosComponent;
  let fixture: ComponentFixture<MostrarDatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarDatosComponent],
      imports: [IonicModule.forRoot(), CommonModule],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
