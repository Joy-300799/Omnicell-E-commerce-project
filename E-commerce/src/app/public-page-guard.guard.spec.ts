import { TestBed } from '@angular/core/testing';

import { PublicPageGuardGuard } from './public-page-guard.guard';

describe('PublicPageGuardGuard', () => {
  let guard: PublicPageGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublicPageGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
