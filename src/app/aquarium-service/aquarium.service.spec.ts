import { TestBed, inject } from '@angular/core/testing';

import { AquariumService } from './aquarium.service';

describe('AquariumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AquariumService]
    });
  });

  it('should be created', inject([AquariumService], (service: AquariumService) => {
    expect(service).toBeTruthy();
  }));
});
