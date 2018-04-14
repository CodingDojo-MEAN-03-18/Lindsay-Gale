import { TestBed, inject } from '@angular/core/testing';

import { TimeZoneAppServiceService } from './time-zone-app-service.service';

describe('TimeZoneAppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeZoneAppServiceService]
    });
  });

  it('should be created', inject([TimeZoneAppServiceService], (service: TimeZoneAppServiceService) => {
    expect(service).toBeTruthy();
  }));
});
