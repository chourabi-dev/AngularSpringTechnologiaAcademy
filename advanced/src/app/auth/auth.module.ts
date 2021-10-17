import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';


@NgModule({
  declarations: [AuthComponent, SigninpageComponent, SignuppageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
