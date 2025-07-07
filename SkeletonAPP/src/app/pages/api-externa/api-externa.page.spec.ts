import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiExternaPage } from './api-externa.page';
import { ApiService } from 'src/app/services/api.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

describe('ApiExternaPage', () => {
  let component: ApiExternaPage;
  let fixture: ComponentFixture<ApiExternaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiExternaPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule // 👈 importante para HttpClient
      ],
      providers: [ApiService] // 👈 necesario para inyectar ApiService
    }).compileComponents();

    fixture = TestBed.createComponent(ApiExternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
