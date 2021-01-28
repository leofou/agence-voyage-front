/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RiverCruiseComponent } from './riverCruise.component';

describe('RiverCruiseComponent', () => {
  let component: RiverCruiseComponent;
  let fixture: ComponentFixture<RiverCruiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverCruiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
