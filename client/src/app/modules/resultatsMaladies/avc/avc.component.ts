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
          history.unshift(Number(avc.score));
          this.lineChartLabel.unshift(avc.createdAt.slice(0, 10));
        });

        console.log(history);
        this.dataset = {
          labels: this.lineChartLabel,
          datasets: [
            {
              label: 'risque',
              data: history,
              borderWidth: 1,
            },
          ],
        };
      });
  }
}
