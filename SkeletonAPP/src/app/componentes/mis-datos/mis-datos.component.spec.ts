import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MisDatosComponent } from './mis-datos.component';
import { BaseDatosService } from '../../base-datos.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from 'src/mocks/sqlite.mock';

describe('MisDatosComponent', () => {
  let component: MisDatosComponent;
  let fixture: ComponentFixture<MisDatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MisDatosComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
