import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainRideService {private baseURL = "http://localhost:9090/trainRide";

constructor(private httpClient: HttpClient) { }

public findAll(): Observable<any> {
  return this.httpClient.get(this.baseURL);
}
public findOne(id: number): Observable<any> {
  return this.httpClient.get(this.baseURL + "/" + id);
}
public save(trainRide: any): Observable<any> {
  return this.httpClient.post(this.baseURL, trainRide);
}
public delete(id: number): Observable<any> {
  return this.httpClient.delete(this.baseURL + "/" + id);
}
}
