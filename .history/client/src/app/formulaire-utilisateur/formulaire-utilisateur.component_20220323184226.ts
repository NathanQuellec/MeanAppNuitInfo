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
  
  model = new User(1, '', '', '', '')

  submitted = false;

  constructor(private http: HttpClient, private route: Router){}

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

  infoPerso(utilisateurForm: any){
    let data = utilisateurForm.value
    console.log(utilisateurForm)
    console.log(data.id)
      let id: string = data.id
      let name: string = data.name
      let surname: string = data.surname
      let email: string = data.email
      let adress: string = data.adress
    
      const body = new HttpParams()
      .append('id', id)
      .append('name', name)
      .append('surname', surname)
      .append('email', email)
      .append('adress', adress)
      
      console.log(body)
      this.http.post(environment.apiUrl+"/users", body, httpOptions).subscribe(result => 
      this.resultPost = result);
      console.log(this.resultPost);
      this.route.navigate(['/Accueil']);
  }
}
