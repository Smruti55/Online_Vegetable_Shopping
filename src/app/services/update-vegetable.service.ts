import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateVegetableService {
  url = 'http://localhost:8085/onlinevegetableshopping2/admin/';

  constructor(private httpClient: HttpClient) { }

  updateVeg(id: number) {
    return this.httpClient.get(this.url + id);

  }

  updateVegetable(id: number, data: any) {
    return this.httpClient.put(this.url +"update/"+ id, data);
  }
}
