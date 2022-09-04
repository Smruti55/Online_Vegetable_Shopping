import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class DeleteVegetableService {
   url = 'http://localhost:8085/onlinevegetableshopping2/admin/deleteById/';
   
  constructor(private httpClient: HttpClient) { }

   deleteVeg(vegId:number){
    return this.httpClient.delete(this.url+vegId);
    
  }
  
}
