import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies : any[] = [];

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.getMoviesFromTheAPI();
  }

  getMoviesFromTheAPI(){
    this.movieService.getMoviesList().toPromise().then((res:any)=>{
      this.movies = res.data.movies

      console.log(this.movies);
      
    })
  }


  searching(e){
    const query = e.target.value;

    this.movieService.searchFor(query).toPromise().then((res:any)=>{
      if (res.data.movies) {
        this.movies = res.data.movies;
      }
      
    })
    
  }


}
