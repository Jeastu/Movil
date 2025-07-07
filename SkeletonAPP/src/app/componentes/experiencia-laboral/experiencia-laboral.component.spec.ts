import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExperienciaLaboralComponent } from './experiencia-laboral.component';
import { BaseDatosService } from '../../base-datos.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock';

describe('ExperienciaLaboralComponent', () => {
  let component: ExperienciaLaboralComponent;
  let fixture: ComponentFixture<ExperienciaLaboralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaLaboralComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
