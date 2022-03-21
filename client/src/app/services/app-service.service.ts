import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'text'
  }),
};


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<string> {
    return this.http.get<string>(environment.apiUrl + '/hello');
  }

  getMessage(): Observable<string> {
    return this.http.get<string>(environment.apiUrl + '/forms');
  }
}
