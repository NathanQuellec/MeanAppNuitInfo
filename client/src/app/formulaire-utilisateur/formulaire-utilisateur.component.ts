import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded'})
} 

@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.css']
})
export class FormulaireUtilisateurComponent implements OnInit {
 
  resultPost: String | any;
  
  model = new User('', '', 0)

  submitted = false;

  constructor(private http: HttpClient, private route: Router){}

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

  infoPerso(utilisateurForm: any){
    let data = utilisateurForm.value
    console.log(utilisateurForm)
      let name: string = data.name
      let surname: string = data.surname
      let age: number = data.age
    
      const body = new HttpParams()
      .append('name', name)
      .append('surname', surname)
      .append('age', age)
      
      console.log(body)
      this.http.post(environment.apiUrl+"/users", body, httpOptions).subscribe(result => 
      this.resultPost = result);
      console.log(this.resultPost);
      this.route.navigate(['/Accueil']);
  }
}
