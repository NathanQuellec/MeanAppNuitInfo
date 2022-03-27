import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded'})
} 
@Injectable({
  providedIn: 'root'
})

export class UserService {

  body: String | any;
  resultPost: String | any;

  constructor(private http: HttpClient) { }

  informationsPerso(name : string, surname : string, age: number){
    const body = new HttpParams()
      .append('name', name)
      .append('surname', surname)
      .append('age', age)
    
    console.log(body)
    this.http.post(environment.apiUrl+"/users", body, httpOptions).subscribe(result => 
    this.resultPost = result);
    console.log(this.resultPost);
  }
}
