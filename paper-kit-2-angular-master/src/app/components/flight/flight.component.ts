import { Flight } from './../../model/flight';
import { Component, OnInit } from '@angular/core';
import { FlightService }     from 'app/service/flight.service'

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  flights: Flight[];
  flight: Flight= new Flight();
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.flightService.findAll().subscribe(data => { this.flights = data });
  }

  deleteFlight(id: number) {
    this.flightService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }
  saveFlight() {
    this.flightService.save(this.flight).subscribe(
      () => {
        this.findAll();
        this.flight = new Flight();
      }
    );
  }


}
