import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PlansService} from '../../../services/plans.service'
import * as moment from 'moment';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrls: ['./list-plans.component.scss']
})
export class ListPlansComponent implements OnInit {
    result: any;
    previous: any = false;
    next: any = false;
    
  
    loaderDist = true;
    loaderSrc = 'assets/loader.gif';
  
    resultForPage = 10;
    resultFormControl = new FormControl('');
  
    sasName = '';
    sasNameFormControl = new FormControl('');
  
    distForm: FormGroup;
    page = 1;
  
    currentyActualization: any;

  constructor(public formBuilder: FormBuilder, public router: Router, private plansService : PlansService) {
      this.distForm = this.formBuilder.group({
        resultForPage: '',
    });
    this.getPlans();
    this.currentyActualization = new Date;
   }

  ngOnInit(): void {
  }

  async getPlans() {
      this.loaderDist = true;
      this.result = await this.plansService.getInformationPlans();
      this.loaderDist = false;
  }

  formatDate(d='') {
      if (d) {
          return (moment(d).locale('pt-br').format('DD/MM/YYYY hh:mm'));
      } else {
          return '';
      }

  }

  async goToPlan(id='') {
      this.router.navigate(['/specific-plan']);
      this.plansService.idPlan = id;
  }

  setPage(i=1) {
      this.page = this.page + i;
      this.getPlans();
  }

  newPlan() {
      this.router.navigate(['/configurar-plan/novo-plan']);
  }

 
}
