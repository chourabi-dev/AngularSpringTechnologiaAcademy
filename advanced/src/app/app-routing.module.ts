import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutSecionOneComponent } from './about-secion-one/about-secion-one.component';
import { AboutSecionTwoComponent } from './about-secion-two/about-secion-two.component';
import { ChatWithUserComponent } from './chat-with-user/chat-with-user.component';
import { ChatGuard } from './chat.guard';
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [
  { path:"", redirectTo:"home", pathMatch:"full" },
  { path:'home', component:HomePageComponent },
  { path:'chats', component:ChatsPageComponent , canActivate:[ChatGuard]},
  { path:'chats/user/:id', component:ChatWithUserComponent },
  


  { path:'about', component:AboutPageComponent, children:[
    { path:'one', component :AboutSecionOneComponent },
    { path:'two', component :AboutSecionTwoComponent },
    
  ] },


  { path:'contact', component:ContactPageComponent },
  { path: 'authentification', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path:'**', component:NotFoundPageComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
