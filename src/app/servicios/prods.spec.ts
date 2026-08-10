import { TestBed } from '@angular/core/testing';

import { Prods } from './prods';

describe('Prods', () => {
  let service: Prods;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prods);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
