import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {

  errMsg='';
  succMsg='';


  formData = new FormGroup({
    fullname : new FormControl('',Validators.required),
    email : new FormControl('',Validators.email),
    codeClient : new FormControl('',Validators.required),
    
  })
  constructor( private clientsService:ClientsService ) { }

  ngOnInit(): void {

  }

  add(){
    this.clientsService.addNewClients(this.formData.value).toPromise().then((res:any)=>{
      console.log(res);
      if (res.id) {
        this.succMsg="Client added successfully";
        this.formData.reset();
      } else {
        this.errMsg="Something went wrong !!!"
      }
      
    }).catch((err)=>{
      console.log(err);
      this.errMsg="Something went wrong !!!"
      
    })
  }

}
