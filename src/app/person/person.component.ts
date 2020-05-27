import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input('person') person;  //our component is ready to receive input from menu.component

  @Output('personClicked') personClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.person); //just to check the i/ps we are receiving..we are not logging inside constructor() bcoz constructor are
                              //executed before the input is received.
  }

  onClick(){
    this.personClicked.emit();
    //console.log("Clicked!!");
  }

}
