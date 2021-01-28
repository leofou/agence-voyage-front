import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { CustomerService } from 'app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  customer: Customer= new Customer();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.customerService.findAll().subscribe(data => { this.customers = data });
  }
  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }
  saveCustomer() {
    this.customerService.save(this.customer).subscribe(
      () => {
        this.findAll();
        this.customer = new Customer();
      }
    );
  }


}
