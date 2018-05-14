import { TestBed, inject } from '@angular/core/testing';

import { BrewersService } from './brewers.service';

describe('BrewersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrewersService]
    });
  });

  it('should be created', inject([BrewersService], (service: BrewersService) => {
    expect(service).toBeTruthy();
  }));
});
