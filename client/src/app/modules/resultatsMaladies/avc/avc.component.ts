import { AvcResults } from './../../../interface/AvcResults';
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

  constructor(private user: UserService) {}

  avcResults: AvcResults | any;
  avcScore: Number = 0;

  public type: ChartType = 'bar';

  public barChartLabel: string[] = [];

  public backgroundColor: string[] = [];

  public borderColor: string[] = [];

  public pointHoverBackgroundColor: string[] = [];

  public dataset: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  getAVCResultsModelFromAPI() {
    this.user.getAVCResultsModel().subscribe((result: AvcResults) => {
      this.avcResults = result;
      this.avcScore = Number(result.score) * 100;
      console.log(this.avcResults);
    });
  }

  getAVCResultsModelHistoryFromAPI() {
    let history: number[] = [];
    this.user
      .getAVCResultsModelHistory()
      .subscribe((avcResultsHistory: Array<AvcResults>) => {
        
        avcResultsHistory.forEach((avc) => {
          history.push(Number(avc.score));
          if (avc.prediction) {
            this.backgroundColor.push('rgba(255, 99, 132, 0.2)');
            this.borderColor.push('rgba(255, 99, 132, 1)');
          } else {
            this.backgroundColor.push('rgba(54, 162, 235, 0.2)');
            this.borderColor.push('rgba(54, 162, 235, 1)');
          }
          this.barChartLabel.push(avc.createdAt.slice(0,10));
        });

        console.log(history);
        this.dataset = {
          labels: this.barChartLabel,
          datasets: [
            {
              label: 'risque',
              data: history,
              borderColor: this.borderColor,
              backgroundColor: this.backgroundColor,
              borderWidth: 1,
            },
          ],
        };
      });
  }
}
