import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-articles',
  templateUrl: './bloc-articles.component.html',
  styleUrls: ['./bloc-articles.component.css']
})
export class BlocArticlesComponent implements OnInit {

  articles = [
    { id: 15 , title:"hello world", content:"this is a small content", nbrLikes: 15 },
    { id: 16 , title:"hello world", content:"this is a small content", nbrLikes: 20 },
    { id: 17 , title:"hello world", content:"this is a small content", nbrLikes: 8 },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
