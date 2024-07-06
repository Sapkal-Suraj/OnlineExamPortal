import { TestBed } from '@angular/core/testing';

import { SagarService } from './sagar.service';

describe('SagarService', () => {
  let service: SagarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SagarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
