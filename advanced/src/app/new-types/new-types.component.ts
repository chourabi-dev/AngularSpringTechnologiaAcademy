import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  /*constructor() { }

  ngOnInit(): void { 
      this.doSynckTask(); 
  }


  async doSynckTask(){
   *
    *  var resFromStationA = await this.goToStationA(); 
    console.log(resFromStationA); 
    var resFromStationB = await this.goToStationB(); 
    console.log(resFromStationB); 
    var resFromStationC = await this.goToStationC(); 
    console.log(resFromStationC); 
    */

  /*
      this.goToStationA().then((data)=>{
        this.goToStationB().then((data)=>{
          this.goToStationC();
        }).catch((err)=>{
          console.log(err);
          
        })
      })
      
     
      
    }
   
    goToStationA(){
      var promise = new Promise((reslove,reject)=>{
        setTimeout(() => {
          reslove( {success : true, message:'data resilved from station A'} );
        }, 3000);
      });
  
      return promise;
    }
  
  
    goToStationB(){
      var promise = new Promise((reslove,reject)=>{
        setTimeout(() => {
          reject( {success : false, message:'something went wrong'} );
        }, 4000);
      });
  
      return promise;
    }
  
  
    goToStationC(){
      var promise = new Promise((reslove,reject)=>{
        setTimeout(() => {
          reslove( {success : true, message:'data resolved from station C'} );
        }, 2000);
      });
  
      return promise;
    }
  */






  /************************************************* observales**************************************************** */


  constructor(){}

  ngOnInit() { 
    this.watchMyPosition().subscribe((data)=>{
      console.log(data); 
    },(err)=>{
      console.log(err); 
    })
  }



  watchMyPosition(){
    let locations = new Observable((observer)=>{ 
      let watchID:number; 
      watchID = navigator.geolocation.watchPosition((position)=>{
        observer.next(position);
      },(err)=>{
        observer.error(err);
      }) 
    }) 
    return locations;
  }



}
