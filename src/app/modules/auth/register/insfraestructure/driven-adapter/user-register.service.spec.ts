import { TestBed } from '@angular/core/testing';

import { UserRegisterImplService } from './user-register-impl.service';

describe('UserRegisterService', () => {
  let service: UserRegisterImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisterImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
