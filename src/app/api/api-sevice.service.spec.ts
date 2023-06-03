import { TestBed } from '@angular/core/testing';

import { ApiSeviceService } from './api-sevice.service';

describe('ApiSeviceService', () => {
  let service: ApiSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
