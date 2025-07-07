import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiLocalPage } from './api-local.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service'; // Ajusta si tu ruta es diferente

describe('ApiLocalPage', () => {
  let component: ApiLocalPage;
  let fixture: ComponentFixture<ApiLocalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiLocalPage],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
