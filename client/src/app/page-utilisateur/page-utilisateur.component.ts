import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.css']
})
export class PageUtilisateurComponent implements OnInit {

  constructor() { }

  age: number = 20;
  //poids en kg
  weight: number = 60;
  //taille en m
  height: number = 1.65;

  imc: number = Number(Math.round(this.weight / (this.height ** 2)).toFixed(2));
  colorIMCDigits: string = "";
  colorIMCLabel: string = "";

  public getColorIMC(){
    console.log(this.imc);
    if(this.imc > 35){
      this.colorIMCDigits = "text-red-700";
      this.colorIMCLabel = "text-red-600";
    }
    else if(this.imc > 30){
      this.colorIMCDigits = "text-orange-700";
      this.colorIMCLabel = "text-orange-600";
    }
    else if(this.imc > 25){
      this.colorIMCDigits = "text-yellow-700";
      this.colorIMCLabel = "text-yellow-600";
    }
    else if(this.imc > 18){
      this.colorIMCDigits = "text-green-700";
      this.colorIMCLabel = "text-green-600";
    }
    else{
      this.colorIMCDigits = "text-blue-700";
      this.colorIMCLabel = "text-blue-600";
    }
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Maladie A', 'Maladie B', 'Maladie C', 'Maladie D', 'Maladie E'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 59, 90, 81, 56], label: 'Dataset A' },
      { data: [ 28, 48, 40, 19, 96], label: 'Dataset B' }
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
    this.getColorIMC();
  }

}
