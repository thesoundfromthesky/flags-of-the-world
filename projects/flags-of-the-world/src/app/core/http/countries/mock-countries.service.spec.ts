import { TestBed } from '@angular/core/testing';

import { MockCountriesService } from './mock-countries.service';

describe('MockCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockCountriesService = TestBed.get(MockCountriesService);
    expect(service).toBeTruthy();
  });
});
