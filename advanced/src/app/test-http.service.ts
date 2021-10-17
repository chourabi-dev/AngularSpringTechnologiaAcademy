 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {

  constructor(private http:HttpClient) { }


  getArticles(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
