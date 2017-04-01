/**
 * Created by Skander Khedhiri on 31/03/2017.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { BusinessService } from './business.service';

describe('BusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessService]
    });
  });

  it('should ...', inject([BusinessService], (service: BusinessService) => {
    expect(service).toBeTruthy();
  }));
});
