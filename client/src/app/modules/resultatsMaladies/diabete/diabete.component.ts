import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Results } from 'src/app/interface/Results';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-diabete',
  templateUrl: './diabete.component.html',
  styleUrls: ['./diabete.component.css']
})
export class DiabeteComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.getDiabeteResultsModelFromAPI();
    this.getDiabeteResultsModelHistoryFromAPI();
  }

  diabeteResults: Results | any;
  diabeteScore: Number = 0;

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

getDiabeteResultsModelFromAPI() {
  this.user.getDiabeteResultsModel().subscribe((result: Results) => {
    this.diabeteResults = result;
    this.diabeteScore = Number(result.score) * 100;
    console.log(this.diabeteResults);
  });
}

getDiabeteResultsModelHistoryFromAPI() {
  let history: number[] = [];
  let lim: number[] = [];
  this.user
    .getDiabeteResultsModelHistory()
    .subscribe((diabeteResultsHistory: Array<Results>) => {
      diabeteResultsHistory.forEach((diabete) => {
        history.unshift(Number(diabete.score));
        lim.push(0.5);
        this.lineChartLabel.unshift(diabete.createdAt.slice(0, 10));
      });

      console.log(history);
      this.dataset = {
        labels: this.lineChartLabel,
        datasets: [
          {
            label: 'Limite',
            data: lim
          },
          {
            label: 'risque',
            data: history
          }
        ],
      };
    });
}
}
