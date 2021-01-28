import { JourneyService } from './../../service/journey.service';
import { Journey } from './../../model/journey';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  journeys: Journey[];
  journey: Journey= new Journey();
  constructor(private customerService: JourneyService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.customerService.findAll().subscribe(data => { this.journeys = data });
  }


}
