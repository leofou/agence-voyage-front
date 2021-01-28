import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {  private baseURL = "http://localhost:9090/journey";

constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public save(journey: any): Observable<any> {
    return this.httpClient.post(this.baseURL, journey);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
}
