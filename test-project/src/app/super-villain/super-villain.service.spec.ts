import { TestBed } from '@angular/core/testing';

import { SuperVillainService } from './super-villain.service';

describe('SuperVillainService', () => {
  let service: SuperVillainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperVillainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
