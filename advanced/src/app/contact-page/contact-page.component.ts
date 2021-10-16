import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  imageEmployees = [];
  constructor(  private employeService:EmployeeService ) { }


  ngOnInit(): void {
    this.imageEmployees = this.employeService.getEmployeesList();
  }

}
