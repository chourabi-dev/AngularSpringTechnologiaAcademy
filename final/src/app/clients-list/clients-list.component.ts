import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients = [];

  tmpSelectedOrders = [];

  constructor(private cs:ClientsService) { }

  ngOnInit(): void {
    this.cs.findAllClients().toPromise().then((res:any)=> this.clients = res)
  }



  showOrder(orders){
    console.log(orders);
    this.tmpSelectedOrders = orders;
    
  }

}
