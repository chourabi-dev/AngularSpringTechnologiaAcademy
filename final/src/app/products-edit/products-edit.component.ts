import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  errMsg='';
  succMsg='';

  formData = new FormGroup({
    title : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    department_id : new FormControl('-1',Validators.required)
    
  })

  departments = [];

  constructor(private ds:DepartmentService, private productService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.findAllDepartment().toPromise().then((res:any)=>{ this.departments = res })
    const id = this.route.snapshot.params.id;
    this.productService.findById(id).toPromise().then((res:any)=>{
      console.log(res);

      this.formData.setValue({
        title : res.title,
        price : res.price,
        quantity : res.quantity,
        department_id : res.department.id
      })
      
    })
  }

  update(){
    const id = this.route.snapshot.params.id;
   this.productService.updateById(id,this.formData.value).toPromise().then((res:any)=>{
      console.log(res);
      if (res.id) {
        this.succMsg="Product updated successfully";
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
