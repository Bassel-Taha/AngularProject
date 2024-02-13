import { TestBed } from '@angular/core/testing';

import { BaseServiceAPIService } from './base-service-api.service';

describe('BaseServiceAPIService', () => {
  let service: BaseServiceAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseServiceAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
