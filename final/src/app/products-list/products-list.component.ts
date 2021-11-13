import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products= [];

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().toPromise().then((res:any)=>{
      this.products = res
    })
  }





  deleteProduct(id) {
    if (confirm('do you really want to delete product N° '+id+' ?')) {
      //

      this.productService.deleteById(id).toPromise().then((res)=>{ 
        this.productService.getAllProducts().toPromise().then((res:any)=>{
          this.products = res
        })
       })
    }
  }

}
