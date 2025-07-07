import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CertificacionesComponent } from './certificaciones.component';
import { BaseDatosService } from '../../base-datos.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock';

describe('CertificacionesComponent', () => {
  let component: CertificacionesComponent;
  let fixture: ComponentFixture<CertificacionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CertificacionesComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
