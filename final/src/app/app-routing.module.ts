import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SellsAddComponent } from './sells-add/sells-add.component';
import { SellsListingComponent } from './sells-listing/sells-listing.component';


const routes: Routes = [

  
  { path:'department/add', component:DepartmentAddComponent },
  { path:'department/list', component:DepartmentListComponent },


  { path:'products/add', component:ProductsAddComponent },
  { path:'products/edit/:id', component:ProductsEditComponent },
  { path:'products/list', component:ProductsListComponent },
  
  { path:'clients/add', component:ClientsAddComponent },
  { path:'clients/list', component:ClientsListComponent },
  
    
  { path:'sells/add/:idClient', component:SellsAddComponent },
  { path:'clients/list', component:SellsListingComponent },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
