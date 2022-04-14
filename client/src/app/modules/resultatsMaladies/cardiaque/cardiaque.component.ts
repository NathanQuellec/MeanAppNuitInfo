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

  model = new UserCardiaque(0,0,0,0,0,0,0,0,0,0,0);

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

  /*infoCardiaque(cardiaqueForm: any) {
    console.log(cardiaqueForm)

    let data = cardiaqueForm;

    let gender: number = data.gender;
    let age: number = data.age;
    let chest_pain: number = data.chest_pain;
    let pression: number = data.pression;
    let chroléstérol: number = data.chroléstérol;
    let glycémie: number = data.glycémie;
    let electro: number = data.electro;
    let rythme: number = data.rythme;
    let angine: number = data.angine;
    let oldpeak: number = data.oldpeak;
    let pente: number = data.pente;

    let result = this.user.informationsCardiaque(
      gender,
      age,
      chest_pain,
      pression,
      chroléstérol,
      glycémie, 
      electro,
      rythme,
      angine,
      oldpeak,
      pente
    );
    console.log(result);
    this.route.navigate(['/Maladies/Cardiaque']);
  }*/

  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  /*chests = [
    { chestname: 'Aucune', chestcode: 0 },
    { chestname: 'Angine de poitrine atypique', chestcode: 1 },
    { chestname: 'Autre', chestcode: 2 },
    { chestname: 'Angine de poitrine typique', chestcode: 3 },
  ];

  electros = [
    { electroname: 'Hypertrophie ventriculaire gauche', electrocode: 0 },
    { electroname: 'Normal', electrocode: 1 },
    { electroname: "Anomalie de l'onde ST-T", electrocode: 2 },
  ];

  pentes = [
    { pentename: 'Bas', pentecode: 0 },
    { pentename: 'Plat', pentecode: 1 },
    { pentename: "Haut", pentecode: 2 },
  ];*/

}
