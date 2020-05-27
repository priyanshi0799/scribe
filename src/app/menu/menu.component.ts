import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {  //normal TS class MenuComponent implementing an interface OnInit
                                                //implementing this interface requires to define a function called
                                                //ngOnInit()
  // firstName: string = "Priyanshi"; //we can access it in menu.component.html file
  // lastName: string = "Gupta";

  // num1: Number = 2;
  // num2: Number = 3;


  // logo: string = "https://angular.io/assets/images/logos/angular/angualar.svg";
  google: string = "https://www.google.com"
  // disabledButton: boolean = false;
  // name: string = "MyName";
  num1= 2
  num2= 3;
  sum;
  num3;
  num4;
  sum2;

  //ngFor
  fruits: string[]=[];

  //ngSwitch
  people: any[] = [{              //any is a json type wc allows us to store array of objects
    name: "John",
    age: 23,
    country: "AU"
  },
  {
    name: "Bob",
    age: 34,
    country: "US" 
  },
  {
    name: "Alex",
    age: 33,
    country: "UK"
  },
  {
    name: "Sam",
    age: 40,
    country: "FR"
  },
  {
    name: "Ary",
    age: 35,
    country: "IN"
  }];


  //for ngIf
  showGoogleButton: boolean=true;//if set to false button will not be visible..it can be bind to a function also


  constructor() { 
    this.fruits.push("Apple");
    this.fruits.push("Mango");
    this.fruits.push("Grapes");
    this.fruits.push("Banana");
    this.fruits.push("Orange");
  }

  // sayHello(){     //function in TS..if it returns something then..sayHello:return (){}
  //   alert("Hello");
  // }

  toggleGoogleButton(){

    this.showGoogleButton=!this.showGoogleButton;
  }

  addThem(){
    this.sum = this.num1 + this.num2;
  }

  clearThem(){
    this.num1=undefined;
    this.num2=undefined;
    this.sum=undefined;
  }

  add(){
    this.sum2=this.num3+this.num4;
  }

  clear(){
    this.num3=undefined;
    this.num4=undefined;
    this.sum2=undefined;

  }

  

  // log(ev){
  //   console.log("Hii");
  //   console.log(ev);
  //   console.log(ev.target.value);
  // }

  ngOnInit() {         //it is a life cycle hook for this component wc means that this function is called only
  }                    //when this component is initialised.

  onPersonClick(){
    console.log("Clicked!!");
  }

}
