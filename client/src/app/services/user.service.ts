import { Results } from '../interface/Results';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  body: String | any;
  public resultPost: String | any = 'test';

  constructor(private http: HttpClient) {}

  informationsPerso(
    name: string,
    surname: string,
    gender: string,
    age: number,
    house: string,
    sport: string,
    fruit: string,
    vegetable: string,
    address: string,
    email: string
  ) {
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
      .append('email', email);

    console.log(body);
    this.http
      .post(environment.apiUrl + '/users', body, httpOptions)
      .subscribe((result) => (this.resultPost = result));
    console.log(this.resultPost);
  }

  informationsAvc(
    gender: number,
    age: number,
    hypertension: number,
    heartDisease: number,
    married: number,
    work_type: number,
    residence: number,
    glucose: number,
    bmi: number,
    smoking_status: number
  ) {
    const body = new HttpParams()
      .append('gender', gender)
      .append('age', age)
      .append('hypertension', hypertension)
      .append('heartDisease', heartDisease)
      .append('married', married)
      .append('work_type', work_type)
      .append('residence', residence)
      .append('glucose', glucose)
      .append('bmi', bmi)
      .append('smoking_status', smoking_status);

    console.log(body);
    return this.http
      .post(environment.apiUrl + '/diagnostics/avc', body, httpOptions)
      .subscribe((result) => {
        this.resultPost = JSON.stringify(result);
        console.log(`resp : ${this.resultPost}`);
      });
  }

  getAVCResultsModel(): Observable<Results> {
    return this.http.get<Results>(environment.apiUrl + '/diagnostics/avc');
  }

  informationsCardiaque(
    Sex: number,
    Age: number,
    ChestPainType: number,
    RestingBP: number,
    Cholesterol: number,
    FastingBS: number,
    RestingECG: number,
    MaxHR: number,
    ExerciseAngina: number,
    Oldpeak: number,
    ST_Slope: number

  ) {
    const body = new HttpParams()
      .append('Age', Age)
      .append('Sex', Sex)
      .append('ChestPainType', ChestPainType)
      .append('RestingBP',RestingBP)
      .append('Cholesterol',Cholesterol)
      .append('FastingBS',FastingBS)
      .append('RestingECG', RestingECG)
      .append('MaxHR',MaxHR)
      .append('ExerciseAngina',ExerciseAngina)
      .append('Oldpeak',Oldpeak)
      .append('ST_Slope',ST_Slope);

    console.log(body);
    return this.http
      .post(environment.apiUrl + '/diagnostics/cardiaque', body, httpOptions)
      .subscribe((result) => {
        this.resultPost = JSON.stringify(result);
        console.log(`resp : ${this.resultPost}`);
      });
  }

  getCardiaqueResultsModel(): Observable<Results> {
    return this.http.get<Results>(environment.apiUrl + '/diagnostics/cardiaque');
  }

  getCardiaqueResultsModelHistory(): Observable<Array<Results>> {
    return this.http.get<Array<Results>>(environment.apiUrl + '/diagnostics/cardiaque/history');
  }

  informationsDiabete(
    HighBP: number,
    HighChol: number,
    CholCheck: number,
    BMI: number,
    Smoker: number,
    Stroke: number,
    HeartDiseaseorAttack: number,
    PhysActivity: number,
    Fruits: number,
    Veggies: number,
    HvyAlcoholConsump: number,
    AnyHealthcare: number,
    NoDocbcCost: number,
    GenHlth:number,
    MentHlth: number,
    PhysHlth: number,
    DiffWalk: number,
    Sex: number,
    Age: number,
    Education: number,
    Income: number

  ) {
    const body = new HttpParams()
      .append('HighBP', HighBP)
      .append('HighChol', HighChol)
      .append('CholCheck', CholCheck)
      .append('BMI', BMI)
      .append('Smoker', Smoker)
      .append('Stroke', Stroke)
      .append('HeartDiseaseorAttack', HeartDiseaseorAttack)
      .append('PhysActivity', PhysActivity)
      .append('Fruits', Fruits)
      .append('Veggies', Veggies)
      .append('HvyAlcoholConsump', HvyAlcoholConsump)
      .append('AnyHealthcare', AnyHealthcare)
      .append('NoDocbcCost', NoDocbcCost)
      .append('GenHlth', GenHlth)
      .append('MentHlth', MentHlth)
      .append('PhysHlth', PhysHlth)
      .append('DiffWalk', DiffWalk)
      .append('Sex', Sex)
      .append('Age', Age)
      .append('Education', Education)
      .append('Income', Income);

    console.log(body);
    return this.http
      .post(environment.apiUrl + '/diagnostics/diabete', body, httpOptions)
      .subscribe((result) => {
        this.resultPost = JSON.stringify(result);
        console.log(`resp : ${this.resultPost}`);
      });
  }

  getDiabeteResultsModel(): Observable<Results> {
    return this.http.get<Results>(environment.apiUrl + '/diagnostics/diabete');
  }

  getDiabeteResultsModelHistory(): Observable<Array<Results>> {
    return this.http.get<Array<Results>>(environment.apiUrl + '/diagnostics/diabete/history');
  }

  getAVCResultsModelHistory(): Observable<Array<Results>> {
    return this.http.get<Array<Results>>(environment.apiUrl + '/diagnostics/avc/history');
  }
  
  getCardiologueAppointment(city: string) {
    const params = new HttpParams()
        .append('city', city);
    return this.http.get<String>(environment.apiUrl + '/appointment/cardiologue', {params: params});
  }

  getReverseGeocoding() {
    return this.http.get<String>("https://maps.googleapis.com/maps/api/geocode/json?latlng=48.890939,2.1115931&key=AIzaSyCx4vvO5hektNvbDYf-lS4oyEeetcMkhNE");
  }
  
}
