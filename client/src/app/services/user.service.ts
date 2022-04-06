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

  informationsPerso(name: string, surname: string, gender: string, age: number, house: string, sport: string, fruit: string, vegetable: string, address: string, email: string){
    const body = new HttpParams()
      .append('name', name)
      .append('surname', surname)
      .append('gender', gender)
      .append('age', age)
      .append('house', house)
      .append('sport', sport)
      .append('fruit', fruit)
      .append('vegetable', vegetable)
      .append('address', address)
      .append('email', email)
    
    console.log(body)
    this.http.post(environment.apiUrl+"/users", body, httpOptions).subscribe(result => 
    this.resultPost = result);
    console.log(this.resultPost);
  }


  informationsAvc(gender: string, age: number, hypertension: string, heartDisease: string, married: string, work: string, residence: string, glucose: number, bim: number){
    const body = new HttpParams()
      .append('gender', gender)
      .append('age', age)
      .append('hypertension', hypertension)
      .append('heartDisease', heartDisease)
      .append('married', married)
      .append('work', work)
      .append('residence', residence)
      .append('glucose', glucose)
      .append('bim', bim)

    console.log(body)
    this.http.post(environment.apiUrl+"/users", body, httpOptions).subscribe(result => 
    this.resultPost = result);
    console.log(this.resultPost);
  }

}
