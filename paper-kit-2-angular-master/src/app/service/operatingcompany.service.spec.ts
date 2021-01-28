/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OperatingcompanyService } from './operatingcompany.service';

describe('Service: Operatingcompany', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatingcompanyService]
    });
  });

  it('should ...', inject([OperatingcompanyService], (service: OperatingcompanyService) => {
    expect(service).toBeTruthy();
  }));
});
