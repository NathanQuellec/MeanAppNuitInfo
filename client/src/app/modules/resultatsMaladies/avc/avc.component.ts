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

  public data: number [] = [-0.90, 0.79, -0.83]

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

  constructor(private user: UserService) {}

  displayResultsModel: string = '';
  avcResults: AvcResults | any;


  ngOnInit(): void {
    this.getAVCResultsModelFromAPI();
  }

  getAVCResultsModelFromAPI() {
    this.user.getAVCResultsModel().subscribe((result: AvcResults) => {
      this.avcResults = result
      console.log(this.avcResults);
    });
  }

}
