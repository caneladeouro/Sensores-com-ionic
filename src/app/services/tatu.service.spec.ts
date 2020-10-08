import { TestBed } from '@angular/core/testing';

import { TatuService } from './tatu.service';

describe('TatuService', () => {
  let service: TatuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TatuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
