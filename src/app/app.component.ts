import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular World';
  email = "srijan@gmail.com";
  onKeyUp() {
    console.log(this.email);
  }
  

  



}

