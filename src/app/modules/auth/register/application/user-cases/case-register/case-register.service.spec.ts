import { TestBed } from '@angular/core/testing';

import { CaseRegisterService } from './case-register.service';

describe('CaseRegisterService', () => {
  let service: CaseRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
