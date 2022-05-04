import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Results } from '../interface/Results';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.css']
})
export class PageUtilisateurComponent implements OnInit {

  constructor(private user: UserService) { }

  public type: ChartType = 'line';

  public lineChartLabel: string[] = [];

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

  public avcData: number[] = [];
  public cardiaqueData: number[] = []
  public diabeteData: number[] = [];

  public tps: number = 0;

  age: number = 20;
  //poids en kg
  weight: number = 60;
  //taille en m
  height: number = 1.65;

  imc: number = Number(Math.round(this.weight / (this.height ** 2)).toFixed(2));
  colorIMCDigits: string = "";
  colorIMCLabel: string = "";

  public getColorIMC() {


    console.log(this.imc);
    if (this.imc > 35) {
      this.colorIMCDigits = "text-red-700";
      this.colorIMCLabel = "text-red-600";
    }
    else if (this.imc > 30) {
      this.colorIMCDigits = "text-orange-700";
      this.colorIMCLabel = "text-orange-600";
    }
    else if (this.imc > 25) {
      this.colorIMCDigits = "text-yellow-700";
      this.colorIMCLabel = "text-yellow-600";
    }
    else if (this.imc > 18) {
      this.colorIMCDigits = "text-green-700";
      this.colorIMCLabel = "text-green-600";
    }
    else {
      this.colorIMCDigits = "text-blue-700";
      this.colorIMCLabel = "text-blue-600";
    }
  }

  /*public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['Maladie A', 'Maladie B', 'Maladie C', 'Maladie D', 'Maladie E'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56], label: 'Dataset A' },
      { data: [28, 48, 40, 19, 96], label: 'Dataset B' }
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }*/

  ngOnInit(): void {
    //window.location.reload();
    this.getResultsModelHistory();
    this.getColorIMC();
  }
 

  public getResultsModelHistory() {
    let lim: number[] = [];
    this.user
      .getAVCResultsModelHistory()
      .subscribe((avcResultsHistory: Array<Results>) => {
        avcResultsHistory.forEach((avc) => {
          this.avcData.unshift(Number(avc.score));
          lim.push(0.5);
          this.lineChartLabel.unshift(avc.createdAt.slice(0, 10));
        });
      });
      this.user
      .getDiabeteResultsModelHistory()
      .subscribe((diabeteResultsHistory: Array<Results>) => {
        diabeteResultsHistory.forEach((diabete) => {
          this.diabeteData.unshift(Number(diabete.score));
        });
      });
      this.user
      .getCardiaqueResultsModelHistory()
      .subscribe((cardiaqueResultsHistory: Array<Results>) => {
        cardiaqueResultsHistory.forEach((cardiaque) => {
          this.cardiaqueData.unshift(Number(cardiaque.score));
        });
        
    this.dataset = {
      labels: this.lineChartLabel,
      datasets: [
        {
          label: 'limite',
          data: lim,
          borderDash: [10,5],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'AVC',
          data: this.avcData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
        },
        {
          label: 'Cardiaque',
          data: this.cardiaqueData,
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgb(255, 205, 86)',
          
        },
        {
          label: 'Diabete',
          data: this.diabeteData,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgb(153, 102, 255)',
          pointBackgroundColor: 'rgb(153, 102, 255)'
        }
      ]
    };
  });

  }

}
