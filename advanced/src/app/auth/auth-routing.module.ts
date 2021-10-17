import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  { path: '', redirectTo:'signin', pathMatch:'full' },
  { path: 'signin', component: SigninpageComponent },
  { path: 'signup', component: SignuppageComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
