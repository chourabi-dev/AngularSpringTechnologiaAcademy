import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { SellsAddComponent } from './sells-add/sells-add.component';
import { SellsListingComponent } from './sells-listing/sells-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsListComponent,
    ClientsAddComponent,
    ClientsListComponent,
    SellsAddComponent,
    SellsListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
