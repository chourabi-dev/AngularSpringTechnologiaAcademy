import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-with-user',
  templateUrl: './chat-with-user.component.html',
  styleUrls: ['./chat-with-user.component.css']
})
export class ChatWithUserComponent implements OnInit {


  // injection service !!!
  id;

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    
  }

}
