import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellsService {

  constructor(private http:HttpClient) { }


  addNewOrder(order){
    return this.http.post(environment.api+'/achats/buy',order);
  }
}
