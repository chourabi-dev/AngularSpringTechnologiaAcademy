import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;

  constructor(private auth:AuthService, private router:Router ) { }

  ngOnInit(): void {
    this.auth.info().toPromise().then( (res)=> this.user = res ).catch((err)=>{
      localStorage.clear();
      this.router.navigateByUrl('/signin');
    })
  }

}
