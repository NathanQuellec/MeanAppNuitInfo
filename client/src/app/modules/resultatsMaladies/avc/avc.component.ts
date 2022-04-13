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
    this.dataArray();
    console.log("test")
    console.log(this.dataset)
  }
  
  constructor(private user: UserService) {}

  displayResultsModel: string = '';
  avcResults: AvcResults | any;
  avcResultsHistory: Array<AvcResults> | any;
  avcScore: Number = 0;


  public type: ChartType = 'bar';
  
  public barChartLabel: string [] = ['date1', 'date2', 'date3'];

  public backgroundColor: string[] = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ];

  public borderColor: string [] = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ];

  public data: number [] = [0.8, 0.6, -0.9]

  public dataset: ChartData<'bar'> = {
    labels : this.barChartLabel,
      datasets: [{
        label : 'risque',
        data : this.data,
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        borderWidth: 1
       }]
    }

    public barChartOptions: ChartConfiguration['options'] = {
      responsive: true
    };

  getAVCResultsModelFromAPI() {
    this.user.getAVCResultsModel().subscribe((result: AvcResults) => {
      this.avcResults = result
      this.avcScore = Number(result.score)*100; 
      console.log(this.avcResults);
    });
  }

  getAVCResultsModelHistoryFromAPI() {
    let history: Array<AvcResults>;
    this.user.getAVCResultsModelHistory().subscribe((result: Array<AvcResults>) => {
      this.avcResultsHistory = result;
      console.log(this.avcResultsHistory);
    });
    console.log(this.avcResultsHistory);
  }

  dataArray(){
    let test: Array<number> = [];
    this.avcResultsHistory.array.forEach((element: any) => {
      console.log(`test ${element.score}`)
      test.push(element.score);
    });
    console.log(test);
    return test;
  }



}
