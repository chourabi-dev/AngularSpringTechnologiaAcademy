import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';

  menu = [
    {
      title:"Deprtement",
      link:"/department",
      subMenus:[
        { title:"Ajouter", link:"/department/add" },
        { title:"List", link:"/department/list" },
        
      ]
    },
    {
      title:"Products",
      link:"/products",
      subMenus:[
        { title:"Ajouter", link:"/products/add" },
        { title:"List", link:"/products/list" },
        
        
      ]
    },

  ]
}
