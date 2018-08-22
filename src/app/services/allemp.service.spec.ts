import { TestBed, inject } from '@angular/core/testing';

import { AllempService } from './allemp.service';

describe('AllempService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllempService]
    });
  });

  it('should be created', inject([AllempService], (service: AllempService) => {
    expect(service).toBeTruthy();
  }));
});
