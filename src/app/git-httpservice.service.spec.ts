import { TestBed } from '@angular/core/testing';

import { GitHttpserviceService } from './git-httpservice.service';

describe('GitHttpserviceService', () => {
  let service: GitHttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
