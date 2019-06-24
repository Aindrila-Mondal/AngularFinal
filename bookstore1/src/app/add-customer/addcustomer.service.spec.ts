import { TestBed } from '@angular/core/testing';

import { AddcustomerService } from './addcustomer.service';

describe('AddcustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddcustomerService = TestBed.get(AddcustomerService);
    expect(service).toBeTruthy();
  });
});
