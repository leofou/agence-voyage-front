/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainRideComponent } from './trainRide.component';

describe('TrainRideComponent', () => {
  let component: TrainRideComponent;
  let fixture: ComponentFixture<TrainRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
