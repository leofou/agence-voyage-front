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
  constructor(private customerService: FlightService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.customerService.findAll().subscribe(data => { this.flights = data });
  }


}
