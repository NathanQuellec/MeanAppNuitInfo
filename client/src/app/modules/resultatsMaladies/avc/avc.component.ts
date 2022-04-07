import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-avc',
  templateUrl: './avc.component.html',
  styleUrls: ['./avc.component.css']
})
export class AvcComponent implements OnInit {

  constructor(private user: UserService) { }

  //display: string = "";

  /* postDisplay(){
    console.log(this.user.resultPost)
     this.user.resultPost().subscribe((result: any) => {
      this.display = JSON.stringify(result);
      console.log(result);
    });
     console.log(this.display);
  } */

  ngOnInit(): void {
    //this.postDisplay();
  }


}
