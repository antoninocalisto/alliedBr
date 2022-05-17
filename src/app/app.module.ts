import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NavbarComponent } from './core/components/nav/navbar/navbar.component';

import {PlansService} from './services/plans.service';
import { ListPlansComponent } from './core/components/list-plans/list-plans.component';
import { SpecificPlanComponent } from './core/components/list-plans/specific-plan/specific-plan.component';
import { HomeComponent } from './core/components/home/home.component';
import { FormPlanComponent } from './core/components/list-plans/specific-plan/form-plan/form-plan.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ListPlansComponent,
    SpecificPlanComponent,
    HomeComponent,
    FormPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
