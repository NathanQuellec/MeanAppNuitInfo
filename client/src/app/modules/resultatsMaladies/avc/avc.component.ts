import { Results } from '../../../interface/Results';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-avc',
  templateUrl: './avc.component.html',
  styleUrls: ['./avc.component.css'],
})
export class AvcComponent implements OnInit {
  ngOnInit(): void {
    this.getAVCResultsModelFromAPI();
    this.getAVCResultsModelHistoryFromAPI();
  }

  constructor(private user: UserService) { }

  avcResults: Results | any;
  avcScore: Number = 0;

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

getAVCResultsModelFromAPI() {
  this.user.getAVCResultsModel().subscribe((result: Results) => {
    this.avcResults = result;
    this.avcScore = Number(result.score) * 100;
    console.log(this.avcResults);
  });
}

getAVCResultsModelHistoryFromAPI() {
  let history: number[] = [];
  let lim: number[] = [];
  this.user
    .getAVCResultsModelHistory()
    .subscribe((avcResultsHistory: Array<Results>) => {
      avcResultsHistory.forEach((avc) => {
        history.unshift(Number(avc.score));
        lim.push(0.5);
        this.lineChartLabel.unshift(avc.createdAt.slice(0, 10));
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
            data: history
          }
        ]
      };
    });
  }
}
