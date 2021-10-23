import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit {

  movie = null;

  constructor(private movieService:MoviesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // find movie by "id" 

    this.makeCall();
  }


  makeCall(){
    const id = this.route.snapshot.params.id;

    this.movieService.findMovieById(id).toPromise().then((res:any)=>{
      console.log(res);

      this.movie = res.data.movie
      
    }).catch((err)=>{

    })

  }

}
