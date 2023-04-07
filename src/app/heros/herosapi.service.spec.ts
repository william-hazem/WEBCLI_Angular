import { TestBed } from '@angular/core/testing';

import { HerosapiService } from './herosapi.service';

describe('HerosapiService', () => {
  let service: HerosapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerosapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
