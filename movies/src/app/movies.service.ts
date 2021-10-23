import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }



  getMoviesList(){
    return this.http.get('https://yts.mx/api/v2/list_movies.json');
  }


  findMovieById(id){
    return this.http.get("https://yts.mx/api/v2/movie_details.json?movie_id="+id)
  }



  searchFor(qurey){
    
    return this.http.get('https://yts.mx/api/v2/list_movies.json?query_term='+qurey);
  }




}
