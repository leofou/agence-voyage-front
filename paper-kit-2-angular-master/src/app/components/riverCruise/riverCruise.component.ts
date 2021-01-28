import { RiverCruiseService } from './../../service/riverCruise.service';
import { RiverCruise } from './../../model/riverCruise';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riverCruise',
  templateUrl: './riverCruise.component.html',
  styleUrls: ['./riverCruise.component.scss']
})
export class RiverCruiseComponent implements OnInit {

  riverCruises: RiverCruise[];
  riverCruise: RiverCruise= new RiverCruise();
  constructor(private riverCruiseService: RiverCruiseService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.riverCruiseService.findAll().subscribe(data => { this.riverCruises = data });
  }

  deleteRiverCruise(id: number) {
    this.riverCruiseService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }
  saveRiverCruise() {
    this.riverCruiseService.save(this.riverCruiseService).subscribe(
      () => {
        this.findAll();
        this.riverCruise = new RiverCruise();
      }
    );
  }
}
