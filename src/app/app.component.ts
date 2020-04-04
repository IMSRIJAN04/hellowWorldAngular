import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  

  
   <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

  `, 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular World';
  email = "srijan@gmail.com";
  onKeyUp() {
    console.log(this.email);
  }
  

  



}

