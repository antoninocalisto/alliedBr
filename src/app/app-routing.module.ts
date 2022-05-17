import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPlansComponent} from './core/components/list-plans/list-plans.component'
import { SpecificPlanComponent } from './core/components/list-plans/specific-plan/specific-plan.component'
import { HomeComponent} from './core/components/home/home.component'
import { FormPlanComponent} from './core/components/list-plans/specific-plan/form-plan/form-plan.component'



const routes: Routes = [ 
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'list-plans', component : ListPlansComponent},
  {path: 'specific-plan', component : SpecificPlanComponent}, 
  {path: 'configurar-plan/specific-plan/personal-form', component : FormPlanComponent}, 
  {path: 'about', component : ListPlansComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
