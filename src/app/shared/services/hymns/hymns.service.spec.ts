import { TestBed } from '@angular/core/testing';

import { HymnsService } from './hymns.service';

describe('HymnsService', () => {
  let service: HymnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HymnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
