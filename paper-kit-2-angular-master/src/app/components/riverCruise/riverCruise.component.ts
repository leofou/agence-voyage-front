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
  constructor(private customerService: RiverCruiseService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.customerService.findAll().subscribe(data => { this.riverCruises = data });
  }
}
