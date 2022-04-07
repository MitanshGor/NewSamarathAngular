import { TestBed } from '@angular/core/testing';

import { AuthBehaviourServiceService } from './auth-behaviour-service.service';

describe('AuthBehaviourServiceService', () => {
  let service: AuthBehaviourServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBehaviourServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
