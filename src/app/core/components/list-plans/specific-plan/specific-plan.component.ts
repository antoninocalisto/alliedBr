import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {PlansService} from '../../../../services/plans.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-specific-plan',
  templateUrl: './specific-plan.component.html',
  styleUrls: ['./specific-plan.component.scss']
})
export class SpecificPlanComponent implements OnInit {

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

  constructor(public formBuilder: FormBuilder, 
    public router: Router, 
    private plansService : PlansService
    ) {
      this.distForm = this.formBuilder.group({
        resultForPage: '',
    });
    this.currentyActualization = new Date;
    this.getSpecificPlan();
     }

  ngOnInit(): void {
  }

  async getSpecificPlan() {
    this.loaderDist = true;
    this.result = await this.plansService.getInformationSpecificPlans();
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
    this.router.navigate(['/configurar-plan/plan/' + id]);
}

setPage(i=1) {
    this.page = this.page + i;
}

newPlan() {
    this.router.navigate(['/configurar-plan/novo-plan']);
}

gotToAcessFormPersonal() {
  this.router.navigate(['/configurar-plan/specific-plan/personal-form']);
}

}
