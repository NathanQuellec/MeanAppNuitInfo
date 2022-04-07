import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { UserAvc } from '../user-avc'

@Component({
  selector: 'app-formulaire-avc',
  templateUrl: './formulaire-avc.component.html',
  styleUrls: ['./formulaire-avc.component.css']
})

export class FormulaireAvcComponent implements OnInit {

  body: String | any;
  resultPost: String | any;

  model = new UserAvc( '', 0, '', '', '', '', '', 0, 0)

  submitted = false;

  constructor(private http: HttpClient, private route: Router, private user: UserService){}


  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }


  infoAvc(avcForm: any){
    let data = avcForm.value

    console.log(avcForm)

    let gender: string = data.gender;
    let age: number = data.age;
    let hypertension: string = data.hypertension;
    let heartDisease: string = data.heartDisease;
    let married: string = data.married;
    let work: string = data.work;
    let residence: string = data.residence;
    let glucose: number = data.glucose;
    let bmi: number = data.bmi;

    this.user.informationsAvc( gender, age, hypertension, heartDisease, married, work, residence, glucose, bmi);
    this.route.navigate(['/']);
  }


  works = [
    { workname: "Sans emploi", workcode: "Never_worked" },
    { workname: "Etudiant", workcode: "children" },
    { workname: "Fonctionnaire", workcode: "Govt_jov" },
    { workname: "Auto-entrepreneur", workcode: "Self-employed" },
    { workname: "Salarié", workcode: "Private" }
  ];

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
}
}
