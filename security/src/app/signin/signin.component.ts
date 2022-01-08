import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  authForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
    
    
  })
  constructor(private auth: AuthService, private router:Router ) { }

  ngOnInit(): void {
  }


  connect(){
    const user = this.authForm.value;  

    this.auth.signin(user).toPromise().then((res:any)=>{
      console.log(res);
      
      if (res.accessToken) {
        // save token  in localstorage !!!!

        localStorage.setItem('access-token',res.tokenType+' '+res.accessToken);
        
        
        this.router.navigateByUrl('/home');
      }
    })
    
  }


}
