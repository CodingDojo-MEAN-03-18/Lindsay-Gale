import { TestBed, inject } from '@angular/core/testing';

import { RetroBarcodeServiceService } from './retro-barcode-service.service';

describe('RetroBarcodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetroBarcodeServiceService]
    });
  });

  it('should be created', inject([RetroBarcodeServiceService], (service: RetroBarcodeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
