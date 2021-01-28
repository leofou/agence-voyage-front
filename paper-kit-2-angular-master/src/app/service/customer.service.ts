import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'app/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:9090/customers";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public save(customer: Customer): Observable<any> {
    return this.httpClient.post(this.baseURL, customer);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  public update(id: number,customer:Customer): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id,customer);
  }

}
