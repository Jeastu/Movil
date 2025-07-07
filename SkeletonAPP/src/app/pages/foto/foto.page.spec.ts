import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FotoPage } from './foto.page';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { CameraMock } from 'src/app/mocks/camera.mock'; // ajusta si está en otra ruta
import { IonicModule } from '@ionic/angular';

describe('FotoPage', () => {
  let component: FotoPage;
  let fixture: ComponentFixture<FotoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FotoPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Camera, useClass: CameraMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
