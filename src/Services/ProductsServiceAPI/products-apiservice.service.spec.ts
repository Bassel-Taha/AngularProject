import { TestBed } from '@angular/core/testing';

import { ProductsAPIServiceService } from './products-apiservice.service';

describe('ProductsAPIServiceService', () => {
  let service: ProductsAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
