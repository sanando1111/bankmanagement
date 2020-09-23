import { TestBed } from '@angular/core/testing';

import { LoggedInuserAuthGuardService } from './logged-inuser-auth-guard.service';

describe('LoggedInuserAuthGuardService', () => {
  let service: LoggedInuserAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInuserAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
