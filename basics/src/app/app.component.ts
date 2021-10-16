import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Number
   * string
   * boolean
   * object !!!!!!
   * arrays ...
   * 
   */

  /*title ="hello world angular spring project"; 

  employees: any[] = [
    { fullname:"chourabi taher", email:'tchourbai@gmail.com' },
    { fullname:"chourabi taher 2", email:'tchourbai@gmail.com' },
    { fullname:"chourabi taher 3 ", email:'tchourbai@gmail.com' },
    { fullname:"chourabi taher 4", email:'tchourbai@gmail.com' },
    
  ];


  gallery: string[] = [
    'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg', //0
    'https://i.pinimg.com/originals/6f/74/55/6f7455b4f10b241ad463057762f3170f.jpg', //1
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg' // 2
                                                                            // 3
  ]

  index = 0; 
  backgroundURL = this.gallery[this.index] ; 

  today = new Date();

  constructor(){


    setInterval(()=>{
      this.today = new Date()
    },1000)

    setInterval(()=>{
      this.index++;
      if (this.index == this.gallery.length) {
        this.index = 0;
        this.backgroundURL = this.gallery[this.index] ;
      }else{
        this.backgroundURL = this.gallery[this.index] ;
      }
    },3000)
  }*/

  /************************************************************************************ */

/*
  isSpecial = true;
  content = 'hello world of programmers <strong>this text is bold </strong>'; 
  canClick = true;


  date = new Date();*/

  /********************************************************************************* */
/*
  userForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    fullname : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),

    address: new FormGroup({
      ville: new FormControl('',Validators.required),
      code: new FormControl('',Validators.required),
      
    })
    
  })



  users = [];



  constructor(){  
    console.log(this.userForm);
    
  }


  hundleSubmit(){
    let value = this.userForm.value;

    const valid = this.userForm.valid;

    value.id = this.users.length;


    this.users.push(value);

    this.userForm.reset();
  }
 

  deleteUser(i){
    console.log("about to delete user N° "+i);
    this.users.splice(i,1);

    // HTTP DELETE /path + id 
  }
*/
/*
index = 0;
successMessage=' test message';

stepOne = new FormGroup({
  username: new FormControl('',Validators.required)
})

stepTwo= new FormGroup({
  email: new FormControl('',Validators.required)
})


stepThree= new FormGroup({
  password: new FormControl('',Validators.required)
})



validateForm(){
  this.index++;
}


goBack(){
  this.index--;
}


save(){
  const res = {
    first: this.stepOne.value,
    second: this.stepTwo.value,
    third:this.stepThree.value
  }

  console.log(res);

 this.successMessage = "user saved"
  
}


closeAlert(){
  this.successMessage='';
}*/

/*
isTyping = false;

chat = [];


hundleKeyPress(e:KeyboardEvent){
  console.log(e.key); 

  const key = e.key;
  const value = e.target.value;

  if (key == 'Enter') {

    this.chat.push({
      username:"chourabi",
      message:value,
      date: new Date()
    })

    this.isTyping = false;
    e.target.value = '';
  }else{
    this.isTyping = true
  }

 
 
}
x=0;
y=0;


mouseHover(e:MouseEvent){
  const x = e.clientX;
  const y = e.clientY;

  this.x = x;
  this.y= y;
  
  
  
}*/





}
