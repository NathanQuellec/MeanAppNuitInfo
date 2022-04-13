import { AvcResults } from './../../../interface/AvcResults';
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
