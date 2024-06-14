import { TestBed } from '@angular/core/testing';

import { HostedPageService } from './hosted-page.service';

describe('HostedPageService', () => {
  let service: HostedPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostedPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
