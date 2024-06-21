import { TestBed } from '@angular/core/testing';

import { CaseSaveUserService } from './case-save-user.service';

describe('CaseSaveUserService', () => {
  let service: CaseSaveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseSaveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
