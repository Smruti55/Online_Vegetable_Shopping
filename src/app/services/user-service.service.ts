import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8085/api/addUser";

  
  public addUser(user:User):Observable<User>
  {
   return this.httpClient.post<User>(`${this.baseUrl}`,user);
  }
}