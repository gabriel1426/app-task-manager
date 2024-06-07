import { TestBed } from '@angular/core/testing';

import { CaseLoginService } from './case-login.service';

describe('CaseLoginService', () => {
  let service: CaseLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
