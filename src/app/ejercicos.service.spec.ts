import { TestBed } from '@angular/core/testing';

import { EjercicosService } from './ejercicos.service';

describe('EjercicosService', () => {
  let service: EjercicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjercicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
