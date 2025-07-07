import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLiteMock } from '../../mocks/sqlite.mock';
import { BaseDatosService } from '../base-datos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular'; // ✅ FALTABA ESTO

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        IonicModule.forRoot(), // ✅ AGREGA ESTO
      ],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        BaseDatosService,
        FormBuilder,
        { provide: Router, useValue: { navigate: () => {} } },
        { provide: Storage, useValue: { create: async () => {}, set: async () => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
