import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind'; // bu şekilde veri tipi güvenli hale getirebiliriz. :string
  user: string = "Bilal Dırmık";
  
}
