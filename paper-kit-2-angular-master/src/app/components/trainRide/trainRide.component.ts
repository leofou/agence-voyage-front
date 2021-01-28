import { TrainRide } from './../../model/trainRide';
import { Component, OnInit } from '@angular/core';
import { TrainRideService } from 'app/service/trainRide.service';

@Component({
  selector: 'app-trainRide',
  templateUrl: './trainRide.component.html',
  styleUrls: ['./trainRide.component.scss']
})
export class TrainRideComponent implements OnInit {

  trainRides: TrainRide[];
  trainRide: TrainRide= new TrainRide();
  constructor(private trainRideService: TrainRideService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.trainRideService.findAll().subscribe(data => { this.trainRides = data });
  }

  deleteRiverCruise(id: number) {
    this.trainRideService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }
  saveRiverCruise() {
    this.trainRideService.save(this.trainRideService).subscribe(
      () => {
        this.findAll();
        this.trainRide = new TrainRide();
      }
    );
  }
}
