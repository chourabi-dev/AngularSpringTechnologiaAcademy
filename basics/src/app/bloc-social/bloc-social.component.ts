import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-social',
  templateUrl: './bloc-social.component.html',
  styleUrls: ['./bloc-social.component.css']
})
export class BlocSocialComponent implements OnInit {

  @Input() nbrLikes;

  constructor() { }

  ngOnInit(): void {
  }


  like(){
    this.nbrLikes++;

    console.log("test");
    
    // HTTP user id-- , like, article id ...
  }

}
