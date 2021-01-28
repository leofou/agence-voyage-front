import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiverCruiseService {private baseURL = "http://localhost:9090/riverCruise";

constructor(private httpClient: HttpClient) { }

public findAll(): Observable<any> {
  return this.httpClient.get(this.baseURL);
}
public findOne(id: number): Observable<any> {
  return this.httpClient.get(this.baseURL + "/" + id);
}
public save(riverCruise: any): Observable<any> {
  return this.httpClient.post(this.baseURL, riverCruise);
}
public delete(id: number): Observable<any> {
  return this.httpClient.delete(this.baseURL + "/" + id);
}
}