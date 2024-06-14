import { TestBed } from '@angular/core/testing';

import { CurrSelectedDataService } from './curr-selected-data.service';

describe('CurrSelectedDataService', () => {
  let service: CurrSelectedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrSelectedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
