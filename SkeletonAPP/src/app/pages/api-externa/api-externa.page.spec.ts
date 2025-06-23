import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiExternaPage } from './api-externa.page';

describe('ApiExternaPage', () => {
  let component: ApiExternaPage;
  let fixture: ComponentFixture<ApiExternaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
