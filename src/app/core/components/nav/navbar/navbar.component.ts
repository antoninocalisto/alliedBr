import { Component, OnInit } from '@angular/core';
import {PlansService} from '../../../../services/plans.service'

import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showText = false;
  admin: any = false;

  nivel: any;
  
  orderSelected = false;
  orderHover = false;

  indicadoresSelected = false;
  indicadoresHover = false;

  docSelectedSrc = '../../../../../assets/navMeusDocumentos.PNG';
  docSrc = '../../../../../assets/navMeusDocumentos.PNG';


  analyticSelected = false;
  analyticHover = false;

  aboutSelectedSrc = '../../../../../assets/navSobre.PNG';
  aboutSrc = '../../../../../assets/navSobre.PNG';

  iniSelectedSrc = '../../../../../assets/navHome.PNG';
  iniSrc = '../../../../../assets/navHome.PNG';

  constructor(private plansService: PlansService, public router: Router) { }

  ngOnInit(): void {

  }

  setItemSelected(id=0) {

    this.analyticSelected = false;

    if (id === 1) {
      this.orderSelected = true;
      this.indicadoresSelected = false;
    }

    if (id === 2) {
      this.orderSelected = false;
      this.indicadoresSelected = false;
    }

    if (id === 3) {
      this.orderSelected = false;
      this.indicadoresSelected = true;
    }

    if (id === 4) {
      this.orderSelected = false;
      this.indicadoresSelected = false;
    }

  }

  getHomeDocSpider(){
    this.router.navigate(['home']);
  }

  getInformationPlan(){
    this.router.navigate(['list-plans']);
  }

  getAboutDocSpider(){
    this.router.navigate(['about']);
  }

}
