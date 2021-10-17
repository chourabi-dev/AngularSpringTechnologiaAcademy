import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestHttpService } from '../test-http.service';

@Component({
  selector: 'app-httpclienttest',
  templateUrl: './httpclienttest.component.html',
  styleUrls: ['./httpclienttest.component.css']
})
export class HttpclienttestComponent implements OnInit {


  posts = [];
  constructor(private test:TestHttpService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.test.getArticles().subscribe((data:any[])=>{ 
      console.log(data);
      
      this.posts = data;
    })
  }



}
