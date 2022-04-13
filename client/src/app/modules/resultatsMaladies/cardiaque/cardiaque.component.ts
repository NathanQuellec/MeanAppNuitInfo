import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserCardiaque } from 'src/app/user-cardiaque';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cardiaque',
  templateUrl: './cardiaque.component.html',
  styleUrls: ['./cardiaque.component.css']
})
export class CardiaqueComponent implements OnInit {

  resultPost: String | any;

  model = new UserCardiaque(0);

  constructor(
    private route: Router,
    private user: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openInfoCardiaque(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  infoCardiaque(cardiaqueForm: any) {
    console.log(cardiaqueForm)

    let data = cardiaqueForm;

    let gender: number = data.gender;

    let result = this.user.informationsCardiaque(
      gender
    );
    console.log(result);
    this.route.navigate(['/Maladies/Cardiaque']);
  }

  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }

  submitted = false;

  onSubmit() { this.submitted = true; }
}
