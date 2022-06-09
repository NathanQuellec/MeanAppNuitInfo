import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserCardiaque } from 'src/app/user-cardiaque';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Results } from 'src/app/interface/Results';


@Component({
  selector: 'app-cardiaque',
  templateUrl: './cardiaque.component.html',
  styleUrls: ['./cardiaque.component.css']
})
export class CardiaqueComponent implements OnInit {

  resultPost: String | any;
  url: String | any;
  city: string = "";

  cardiaqueResults: Results | any;
  cardiaqueScore: Number = 0;

  model = new UserCardiaque(0,0,0,0,0,0,0,0,0,0,0);

  constructor(
    private route: Router,
    private user: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getCardiaqueResultsModelFromAPI();
    this.getUserLocation();
    this.getCardiaqueResultsModelHistoryFromAPI();
  }

  
  public type: ChartType = 'line';

  public lineChartLabel: string[] = [];

  public pointHoverBackgroundColor: string[] = [];

  public dataset: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {    
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 1,
      }
    }
};

getUserLocation() {
  let latitude, longitude
  navigator.geolocation.getCurrentPosition( pos => {
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
    console.log(`latitude : ${latitude} longitude : ${longitude}`)

    this.user.getReverseGeocoding(latitude, longitude).subscribe((result: String) => {
      this.url = result;
      this.city = this.url.results[0].address_components[2].long_name;
      this.city = this.city.toLowerCase();
      this.city = this.city.replace(" ","-")
      console.log(this.city);
    })
  });
}

getCardiologueAppointmentFromAPI() {
    this.user.getCardiologueAppointment(this.city).subscribe((result: String) => {
    this.url = result;
    console.log(this.url);
    window.open(this.url);
    });
}

getCardiaqueResultsModelFromAPI() {
  this.user.getCardiaqueResultsModel().subscribe((result: Results) => {
    this.cardiaqueResults = result;
    this.cardiaqueScore = Number(result.score) * 100;
    console.log(this.cardiaqueResults);
  });
}

getCardiaqueResultsModelHistoryFromAPI() {
  let history: number[] = [];
  let lim: number[] = [];
  this.user
    .getCardiaqueResultsModelHistory()
    .subscribe((cardiaqueResultsHistory: Array<Results>) => {
      cardiaqueResultsHistory.forEach((cardiaque) => {
        history.unshift(Number(cardiaque.score));
        lim.push(0.5);
        this.lineChartLabel.unshift(cardiaque.createdAt.slice(0, 10));
      });

      console.log(history);
      this.dataset = {
        labels: this.lineChartLabel,
        datasets: [
          {
            label: 'Limite',
            data: lim,
            borderDash: [10,5],
          },
          {
            label: 'risque',
            data: history,
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgb(255, 205, 86)',
            pointBackgroundColor: 'rgb(255, 205, 86)'
          }
        ],
      };
    });
}

  /*openInfoCardiaque(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }


  submitted = false;

  onSubmit() { this.submitted = true; }

  infoCardiaque(cardiaqueForm: any) {
    console.log(cardiaqueForm)

    let data = cardiaqueForm;

    let gender: number = data.gender;
    let age: number = data.age;
    let chest_pain: number = data.chest_pain;
    let pression: number = data.pression;
    let chroléstérol: number = data.chroléstérol;
    let glycémie: number = data.glycémie;
    let electro: number = data.electro;
    let rythme: number = data.rythme;
    let angine: number = data.angine;
    let oldpeak: number = data.oldpeak;
    let pente: number = data.pente;

    let result = this.user.informationsCardiaque(
      gender,
      age,
      chest_pain,
      pression,
      chroléstérol,
      glycémie, 
      electro,
      rythme,
      angine,
      oldpeak,
      pente
    );
    console.log(result);
    this.route.navigate(['/Maladies/Cardiaque']);
  }

  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }
  
  chests = [
    { chestname: 'Aucune', chestcode: 0 },
    { chestname: 'Angine de poitrine atypique', chestcode: 1 },
    { chestname: 'Autre', chestcode: 2 },
    { chestname: 'Angine de poitrine typique', chestcode: 3 },
  ];

  electros = [
    { electroname: 'Hypertrophie ventriculaire gauche', electrocode: 0 },
    { electroname: 'Normal', electrocode: 1 },
    { electroname: "Anomalie de l'onde ST-T", electrocode: 2 },
  ];

  pentes = [
    { pentename: 'Bas', pentecode: 0 },
    { pentename: 'Plat', pentecode: 1 },
    { pentename: "Haut", pentecode: 2 },
  ];*/

}
