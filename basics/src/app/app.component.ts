import { Component } from '@angular/core';

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


  isSpecial = true;
  content = 'hello world of programmers <strong>this text is bold </strong>'; 
  canClick = true;


  date = new Date();


  constructor(){

  }





}
