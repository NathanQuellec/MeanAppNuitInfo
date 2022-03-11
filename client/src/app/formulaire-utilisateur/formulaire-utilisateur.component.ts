import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.css']
})
export class FormulaireUtilisateurComponent implements OnInit {
 
  model = new User(1, '', '', '', '')

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }
}
