import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments= [];

  constructor(private ds:DepartmentService) { }

  ngOnInit(): void {
    this.ds.findAllDepartment().toPromise().then((res:any)=>{ this.departments = res })
  }

}
