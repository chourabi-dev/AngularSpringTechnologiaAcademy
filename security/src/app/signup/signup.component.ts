import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    name: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    cindId: new FormControl('',Validators.required),
    role: new FormControl('',Validators.required),
    
    
  })
  constructor(private auth: AuthService, private router:Router ) { }

  ngOnInit(): void {
  }


  createUser(){
    const user = this.authForm.value;

    user.role = ['user'];

    console.log(user);

    this.auth.createUser(user).toPromise().then((res:any)=>{
      console.log(res);
      
      /*if (res.success) {
        this.router.navigateByUrl('/signin');
      }*/
    })
    
  }

}
