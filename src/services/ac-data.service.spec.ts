import { TestBed } from '@angular/core/testing';

import { ACDataService } from './ac-data.service';

describe('ACDataService', () => {
  let service: ACDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ACDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
