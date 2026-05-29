import { TestBed } from '@angular/core/testing';

import { Favs } from './favs';

describe('Favs', () => {
  let service: Favs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Favs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
