import { Component, OnInit } from '@angular/core';
import {OperatingCompany} from 'app/model/OperatingCompany';
import { OperatingcompanyService } from './../../service/Operatingcompany.service';

@Component({
  selector: 'app-operatingCompagny',
  templateUrl: './operatingCompagny.component.html',
  styleUrls: ['./operatingCompagny.component.scss']
})
export class OperatingCompagnyComponent implements OnInit {

  operatingCompagnys: OperatingCompany[];
  operatingCompagny: OperatingCompany= new OperatingCompany();
  constructor(private customerService: OperatingcompanyService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.customerService.findAll().subscribe(data => { this.operatingCompagnys = data });
  }


}
