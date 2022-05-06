import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserDiabete } from '../user-diabete';

@Component({
  selector: 'app-formulaire-diabete',
  templateUrl: './formulaire-diabete.component.html',
  styleUrls: ['./formulaire-diabete.component.css']
})
export class FormulaireDiabeteComponent implements OnInit {
  body: String | any;

  model = new UserDiabete(0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 6, 2);

  submitted = false;

  constructor(
    private http: HttpClient,
    private route: Router,
    private user: UserService
  ) { }


  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
  }

  infoDiabete(diabeteForm: any) {
    console.log(diabeteForm);

    let data = diabeteForm.value;

    let hypertension: number = data.hypertension;
    let cholesterol: number = data.cholesterol;
    let cholCheck: number = data.cholCheck;
    let bmi: number = data.bmi;
    let smoke: number = data.smoke;
    let stroke: number = data.stroke;
    let heart: number = data.heart;
    let physActivity: number = data.physActivity;
    let fruits: number = data.fruits;
    let veggies: number = data.veggies;
    let alcohol: number = data.alcohol;
    let healthcare: number = data.healthcare;
    let noDocbcCost: number = data.noDocbcCost;
    let genHlth: number = data.genHlth;
    let mentHlth: number = data.mentHlth;
    let physHlth: number = data.physHlth;
    let diffWalk: number = data.diffWalk;
    let genre: number = data.genre;
    let age: number = data.age;
    let education: number = data.education;
    let income: number = data.income;

    let result = this.user.informationsDiabete(
      hypertension,
      cholesterol, 
      cholCheck,
      bmi,
      smoke,
      stroke,
      heart,
      physActivity,
      fruits,
      veggies,
      alcohol,
      healthcare,
      noDocbcCost,
      genHlth,
      mentHlth,
      physHlth,
      diffWalk,
      genre,
      age,
      education,
      income
    );
    console.log(result);
    this.route.navigate(['/Maladies/Diabete']);
  }

  genHlths = [
    { genHlthname: 'Excellente', genHlthcode: 1 },
    { genHlthname: 'Très bonne', genHlthcode: 2 },
    { genHlthname: 'Bonne', genHlthcode: 3 },
    { genHlthname: 'Correcte', genHlthcode: 4 },
    { genHlthname: 'Basse', genHlthcode: 5 },
  ];

  ages = [
    { agename: '18-24 ans', agecode: 1 },
    { agename: '25-29 ans', agecode: 2 },
    { agename: '30-34 ans', agecode: 3 },
    { agename: '35-39 ans', agecode: 4 },
    { agename: '40-44 ans', agecode: 5 },
    { agename: '45-49 ans', agecode: 6 },
    { agename: '50-54 ans', agecode: 7 },
    { agename: '55-59 ans', agecode: 8 },
    { agename: '60-64 ans', agecode: 9 },
    { agename: '65-69 ans', agecode: 10 },
    { agename: '70-74 ans', agecode: 11 },
    { agename: '75-79 ans', agecode: 12 },
    { agename: '80 ans et plus', agecode: 13 },
  ];

  educations = [
    { educationname: 'Jamais scolarisé ou maternelle', educationcode: 1 },
    { educationname: 'Primaire ou Collège', educationcode: 2 },
    { educationname: 'Lycée', educationcode: 3 },
    { educationname: 'Baccalauréat', educationcode: 4 },
    { educationname: 'Entre bac+1 et bac+3', educationcode: 5 },
    { educationname: 'Bac+4 ou plus', educationcode: 6 },
  ];

  incomes = [
    { incomename: 'moins de 9 000 euros', incomecode: 1 },
    { incomename: 'entre 9 000 et 13 999 euros', incomecode: 2 },
    { incomename: 'entre 14 000 et 17 999 euros', incomecode: 3 },
    { incomename: 'entre 18 000 et 21 999 euros', incomecode: 4 },
    { incomename: 'entre 22 000 et 31 999 euros ', incomecode: 5 },
    { incomename: 'entre 32 000 et 44 999 euros', incomecode: 6 },
    { incomename: 'entre 45 000 et 67 999 euros', incomecode: 7 },
    { incomename: 'plus de 68 000 euros', incomecode: 8 },
  ];

  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }
}
