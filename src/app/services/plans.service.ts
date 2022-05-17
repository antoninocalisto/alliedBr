import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  apiUrl: string = 'http://private-59658d-celulardireto2017.apiary-mock.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public idPlan: String;
  
  constructor(private http: HttpClient) {
    this.idPlan = '';
   }

   //Get informations of Plans
   async getInformationPlans(){
     return new Promise( resolve=>{
        this.http.get<any>(this.apiUrl + '/plataformas').toPromise().then(data => {
            resolve(data);
          }).catch( er => {
            resolve(er);
          }); 
        }
      );
    }

     //Get informations of Specific Plans
   async getInformationSpecificPlans(){
    return new Promise( resolve=>{
       this.http.get<any>(this.apiUrl + '/planos/' + this.idPlan).toPromise().then(data => {
           resolve(data);
         }).catch( er => {
           resolve(er);
         }); 
       }
     );
   }

    //Update informations of PDFs

}
