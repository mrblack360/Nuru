import { TestBed } from '@angular/core/testing';

import { QuarterliesService } from './quarterlies.service';

describe('QuarterliesService', () => {
  let service: QuarterliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuarterliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
