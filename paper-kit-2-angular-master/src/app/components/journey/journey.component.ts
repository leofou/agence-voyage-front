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
  constructor(private journeyService: JourneyService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.journeyService.findAll().subscribe(data => { this.journeys = data });
  }

  deleteJourney(id: number) {
    this.journeyService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }
  saveJourney() {
    this.journeyService.save(this.journey).subscribe(
      () => {
        this.findAll();
        this.journey = new Journey();
      }
    );
  }


}
