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

  public tps: number = 0;

  ngOnInit(): void {
    if(this.tps == 0){
      this.tps = 1;
      this.ngOnInit();
    }
    else{
      this.getUserLocation();
      this.getAVCResultsModelFromAPI();
      this.getAVCResultsModelHistoryFromAPI();
      this.tps = 0;
    }
  }

  constructor(private user: UserService) { }

  avcResults: Results | any;
  avcScore: Number = 0;
  url: String | any;
  city: string = "";

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

getNeurologueAppointmentFromAPI() {
  this.user.getNeurologueAppointment(this.city).subscribe((result: String) => {
  this.url = result;
  console.log(this.url);
  window.open(this.url);
  });
}

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
