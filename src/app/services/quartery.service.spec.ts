import { TestBed } from '@angular/core/testing';

import { QuarteryService } from './quartery.service';

describe('QuarteryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuarteryService = TestBed.get(QuarteryService);
    expect(service).toBeTruthy();
  });
});
