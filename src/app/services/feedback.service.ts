import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedBack {
  private url = 'http://localhost:8084/user';
  
   
  constructor(private httpClient: HttpClient) { }

  users(){
   return this.httpClient.get(this.url);
  }
 
  feedback(data:any){
    return this.httpClient.post("http://localhost:8085/onlinevegetableshopping2/user/feedback",data)
  }
  
}
