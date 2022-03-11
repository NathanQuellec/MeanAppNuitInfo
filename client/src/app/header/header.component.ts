import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Accueil',
        link: '/Accueil',
        index: 0
      }, {
        label: 'Mes informations',
        link: '/Informations',
        index: 1
      }
    ];

  }

  ngOnInit() {
  }

}
