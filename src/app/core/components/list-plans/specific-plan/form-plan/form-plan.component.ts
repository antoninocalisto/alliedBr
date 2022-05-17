import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-plan',
  templateUrl: './form-plan.component.html',
  styleUrls: ['./form-plan.component.scss']
})
export class FormPlanComponent implements OnInit {

  newOrganizationForm: FormGroup;

  cpf = new FormControl('');
  email = new FormControl('');
  name = new FormControl('');
  nascimento = new FormControl('');
  telefone = new FormControl('');
  
  public postForm = {
    nascimento: '',
    cpf: '',
    telefone: '',
    name: '',
    email: '',
    
  };


  constructor(
    public router: Router, 
    public formBuilder: FormBuilder
  ) 
  { 
    this.newOrganizationForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
  }

  submitForm(event:any){
    console.log("Dados preenchidos pelo usuário do plano:");
    console.log(this.postForm.cpf);
    console.log(this.postForm.email);
    console.log(this.postForm.name);
    console.log(this.postForm.nascimento);
    console.log(this.postForm.telefone);
    this.router.navigate(['list-plans']);
  }

}
