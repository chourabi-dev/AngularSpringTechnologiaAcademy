import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
 

  errMsg='';
  succMsg='';

  formData = new FormGroup({
    title : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    department_id : new FormControl('null',Validators.required)
    
  })

  departments = [];

  constructor(private ds:DepartmentService, private productService:ProductsService) { }

  ngOnInit(): void {
    this.ds.findAllDepartment().toPromise().then((res:any)=>{ this.departments = res })
  }

  add(){
    
   this.productService.addNewProduct(this.formData.value).toPromise().then((res:any)=>{
      console.log(res);
      if (res.id) {
        this.succMsg="Product added successfully";
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
