import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-avc',
  templateUrl: './avc.component.html',
  styleUrls: ['./avc.component.css'],
})
export class AvcComponent implements OnInit {
  constructor(private user: UserService) {}

  displayResultsModel: string = '';

  ngOnInit(): void {
    this.getAVCResultsModelFromAPI();
  }

  getAVCResultsModelFromAPI() {
    this.user.getAVCResultsModel().subscribe((result) => {
      this.displayResultsModel = JSON.stringify(result);
      console.log(result);
    });
  }
}
