import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.css']
})
export class ChatsPageComponent implements OnInit {

  chats = [
    { id:15, lastmessage:"hello !!" , user:"custom user"},
    { id:16, lastmessage:"hello !! 2" , user:"custom user"},
    { id:19, lastmessage:"hello !! 3" , user:"custom user"},
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
