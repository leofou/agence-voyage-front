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
  constructor(private operatingcompanyService: OperatingcompanyService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.operatingcompanyService.findAll().subscribe(data => { this.operatingCompagnys = data });
  }

  deleteOperatingCompany(id: number) {

    this.operatingcompanyService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }

  saveOperatingCompany() {
    this.operatingcompanyService.save(this.operatingCompagny).subscribe(
      () => {
        this.findAll();
        this.operatingCompagny = new OperatingCompany();
      }
    );
  }

}
