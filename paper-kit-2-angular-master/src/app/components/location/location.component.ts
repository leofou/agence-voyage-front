import { LocationService } from './../../service/location.service';
import { Component, OnInit } from '@angular/core';
import {Location} from 'app/model/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: Location[];
  location: Location = new Location();

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.locationService.findAll().subscribe(data => { this.locations = data });
  }

  deleteLocation(id: number) {
    this.locationService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }
  saveLocation() {
    this.locationService.save(this.location).subscribe(
      () => {
        this.location = new Location();
        this.findAll();
        
      }
    );
  }

}
