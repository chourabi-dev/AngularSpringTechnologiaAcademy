import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addNewProduct(product){
   return  this.http.post(environment.api+'/products/add',product);
  }

  getAllProducts(){
    return this.http.get(environment.api+'/products/list');
  }

  findById(id){
    return this.http.get(environment.api+'/products/details/'+id);
  }


  updateById(id,data){
    
    return  this.http.post(environment.api+'/products/update/'+id,data);
  }


  deleteById(id){
    return this.http.get(environment.api+'/products/delete/'+id);
  }
}
