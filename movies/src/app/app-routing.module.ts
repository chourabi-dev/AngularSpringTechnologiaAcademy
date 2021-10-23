import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';


const routes: Routes = [
  { path:'', redirectTo:"home-of-movies", pathMatch:'full'  },

  { path:'home-of-movies', component:HomePageComponent },
  { path:'movie/:id', component:MovieDetailsPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
