import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template:`<div> trying template with {{ name }} prop
  <h2>{{2+2}}</h2>
  <h2>{{"welcome "+ name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>


  </div>
  ` ,
  styles: [` 
  div {
  color : red;
  text-align : center;
  font-size :2em;
  }
  `]
})
export class TestComponent implements OnInit {
  public name="interpolation";

  constructor() { }

  ngOnInit(): void {
    
  }
  greetUser() {
    return "holla user";
  }

}
