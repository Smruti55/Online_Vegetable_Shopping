import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private url = 'http://localhost:8085/registration';
  
   
  constructor(private httpClient: HttpClient) { }

  users(){
   return this.httpClient.get(this.url);
  }
 
  createUser(data:any){
    return this.httpClient.post("http://localhost:8085/onlinevegetableshopping2/registration/adduser" ,data)
  }
  
}
