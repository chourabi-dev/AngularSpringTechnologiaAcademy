import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imageEmployees = [];

  addForm = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    
  })
  constructor( private router:Router, private employeService:EmployeeService ) { }

  ngOnInit(): void {
    this.imageEmployees = this.employeService.getEmployeesList();
  }


  goToAboutPage(){
    this.router.navigateByUrl("/about")
  }


  addEmployee(){
    this.employeService.addEmployee(this.addForm.value);
    this.addForm.reset();
  }

}
