import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { UserAvc } from '../user-avc';

@Component({
  selector: 'app-formulaire-avc',
  templateUrl: './formulaire-avc.component.html',
  styleUrls: ['./formulaire-avc.component.css'],
})
export class FormulaireAvcComponent implements OnInit {
  body: String | any;

  model = new UserAvc(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  submitted = false;

  constructor(
    private http: HttpClient,
    private route: Router,
    private user: UserService
  ) {}

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {}

  infoAvc(avcForm: any) {
    console.log(avcForm);

    let data = avcForm.value;

    let gender: number = data.gender;
    let age: number = data.age;
    let hypertension: number = data.hypertension;
    let heartDisease: number = data.heartDisease;
    let married: number = data.married;
    let work_type: number = data.work_type;
    let residence: number = data.residence;
    let glucose: number = data.glucose;
    let bmi: number = data.bmi;
    let smoking_status = data.smoking_status;

    let result = this.user.informationsAvc(
      gender,
      age,
      hypertension,
      heartDisease,
      married,
      work_type,
      residence,
      glucose,
      bmi,
      smoking_status
    );
    console.log(result);
    this.route.navigate(['/Accueil']);
  }

  works = [
    { workname: 'Fonctionnaire', workcode: 0 },
    { workname: 'Sans emploi', workcode: 1 },
    { workname: 'Salarié', workcode: 2 },
    { workname: 'Auto-entrepreneur', workcode: 3 },
    { workname: 'Etudiant', workcode: 4 },
  ];

  smoke = [
    { smokename: 'Inconnu', smokecode: 0 },
    { smokename: 'Ancien fumeur', smokecode: 1 },
    { smokename: 'Jamais fumé', smokecode: 2 },
    { smokename: 'Fumeur', smokecode: 3 },
  ];

  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }
}
