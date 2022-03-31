import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.css']
})
export class FormulaireUtilisateurComponent implements OnInit {
 
  resultPost: String | any;
  
  model = new User('', '', 0)

  submitted = false;

  constructor(private http: HttpClient, private route: Router, private user: UserService){}

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

  infoPerso(utilisateurForm: any){
    let data = utilisateurForm.value

    console.log(utilisateurForm)

    let name: string = data.name;
    let surname: string = data.surname;
    let age: number = data.age;
    
    this.user.informationsPerso(name, surname, age);
    this.route.navigate(['/']);
  }
}
