import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SesionGuard } from './sesion.guard';

describe('SesionGuard', () => {
  let guard: SesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SesionGuard,
        { provide: Router, useValue: {} }
      ],
    });

    guard = TestBed.inject(SesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
