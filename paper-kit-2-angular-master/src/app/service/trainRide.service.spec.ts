/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrainRideService } from './trainRide.service';

describe('Service: TrainRide', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainRideService]
    });
  });

  it('should ...', inject([TrainRideService], (service: TrainRideService) => {
    expect(service).toBeTruthy();
  }));
});
