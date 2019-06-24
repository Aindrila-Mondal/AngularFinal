import { TestBed } from '@angular/core/testing';

import { ShowCustomerService } from './show-customer.service';

describe('ShowCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowCustomerService = TestBed.get(ShowCustomerService);
    expect(service).toBeTruthy();
  });
});
