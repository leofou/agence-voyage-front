/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RiverCruiseService } from './riverCruise.service';

describe('Service: RiverCruise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiverCruiseService]
    });
  });

  it('should ...', inject([RiverCruiseService], (service: RiverCruiseService) => {
    expect(service).toBeTruthy();
  }));
});
