import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiLocalPage } from './api-local.page';

describe('ApiLocalPage', () => {
  let component: ApiLocalPage;
  let fixture: ComponentFixture<ApiLocalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
