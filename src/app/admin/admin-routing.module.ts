import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPlansComponent} from '../core/components/list-plans/list-plans.component'

const routes: Routes = [
  {path: '', component : ListPlansComponent},
  {path: 'inicio', component : ListPlansComponent},
  {path: 'list-plans', component : ListPlansComponent},
  {path: 'sobre', component : ListPlansComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
