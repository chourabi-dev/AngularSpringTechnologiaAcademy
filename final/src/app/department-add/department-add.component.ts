import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  errMsg='';
  succMsg='';

  formData = new FormGroup({
    title : new FormControl('',Validators.required)
  })
  constructor(private dService:DepartmentService) { }

  ngOnInit(): void {

  }

  add(){
    this.dService.addNewDepartment(this.formData.value).toPromise().then((res:any)=>{
      console.log(res);
      if (res.id) {
        this.succMsg="Department added successfully";
        this.formData.reset();
      } else {
        this.errMsg="Something went wrong !!!"
      }
      
    }).catch((err)=>{
      console.log(err);
      this.errMsg="Something went wrong !!!"
      
    })
  }

}
