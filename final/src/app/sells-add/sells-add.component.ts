import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { SellsService } from '../sells.service';

@Component({
  selector: 'app-sells-add',
  templateUrl: './sells-add.component.html',
  styleUrls: ['./sells-add.component.css']
})
export class SellsAddComponent implements OnInit {

  errMsg='';
  succMsg='';

  products = [];


  formData = new FormGroup({
    productID : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    
  })
  constructor(private route:ActivatedRoute , private ps:ProductsService , private ss:SellsService) { }

  ngOnInit(): void {  
    this.ps.getAllProducts().toPromise().then((res:any)=>this.products = res)
  }

  add(){ 

    const id = this.route.snapshot.params.idClient;

    const order = {
      clientID: id,
      productID: this.formData.value.productID,
      quantity: this.formData.value.quantity,
      
    }
    this.ss.addNewOrder(order).toPromise().then((res:any)=>{
      console.log(res);
      if (res.dateTransaction) {
        this.succMsg="Order added successfully";
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
