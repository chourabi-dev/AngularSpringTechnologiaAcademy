import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  /**
   * [id]="m.id" [title]="m.title" [image]="m.large_cover_image"
   */

   @Input() id;
   @Input() title;
   @Input() image;
  

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }


  navigateToMovieDetails(){
    this.router.navigateByUrl('/movie/'+this.id);
  }

}
