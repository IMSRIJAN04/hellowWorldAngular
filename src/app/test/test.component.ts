import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template:`<div> trying template with {{ name }} prop</div>
  
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

}
