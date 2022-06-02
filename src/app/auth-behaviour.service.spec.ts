import { TestBed } from '@angular/core/testing';

import { AuthBehaviourService } from './auth-behaviour.service';

describe('AuthBehaviourService', () => {
  let service: AuthBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
