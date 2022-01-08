import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }


  addNewClients(client){
    return this.http.post(environment.api+'/clients/add',client)
  }

  findAllClients(){
    return this.http.get(environment.api+'/clients/list')
  }
}
