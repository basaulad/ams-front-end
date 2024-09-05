import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listings } from '../models/listings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  api: string = 'http://localhost:8081/listings';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 

  getListings(): Observable<Listings[]>{
    return this.http.get<Listings[]>(this.api, this.httpOptions);
  }
}
