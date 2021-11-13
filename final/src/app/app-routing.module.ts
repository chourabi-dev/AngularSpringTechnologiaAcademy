import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';


const routes: Routes = [

  
  { path:'department/add', component:DepartmentAddComponent },
  { path:'department/list', component:DepartmentListComponent },


  { path:'products/add', component:ProductsAddComponent },
  { path:'products/edit/:id', component:ProductsEditComponent },
  { path:'products/list', component:ProductsListComponent },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
