import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutSecionOneComponent } from './about-secion-one/about-secion-one.component';
import { AboutSecionTwoComponent } from './about-secion-two/about-secion-two.component';
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ChatWithUserComponent } from './chat-with-user/chat-with-user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTypesComponent } from './new-types/new-types.component';
import { HttpClientModule } from'@angular/common/http';
import { HttpclienttestComponent } from './httpclienttest/httpclienttest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    AboutSecionOneComponent,
    AboutSecionTwoComponent,
    ChatsPageComponent,
    ChatWithUserComponent,
    NotFoundPageComponent,
    NewTypesComponent,
    HttpclienttestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
