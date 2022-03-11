import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service : AppServiceService) {}

  title = 'CheckSanté';
  express:string = "";

  ngOnInit(): void {
    this.getDataFromApi();
  }
  
  getDataFromApi() {
    this.service.getData().subscribe(result => {
      this.express = JSON.stringify(result);
      console.log(result);
    });
  }
}
