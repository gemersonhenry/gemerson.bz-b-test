import { TestBed, inject } from '@angular/core/testing';

import { HelperLocationService } from './helper.location.service';

describe('Helper.LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperLocationService]
    });
  });

  it('should be created', inject([HelperLocationService], (service: HelperLocationService) => {
    expect(service).toBeTruthy();
  }));
});
