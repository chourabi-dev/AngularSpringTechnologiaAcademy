import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }


  addNewDepartment(department){
    return this.http.post(environment.api+'/departments/add',department);
  }

  findAllDepartment(){
    return this.http.get(environment.api+'/departments/list');
  }

}
