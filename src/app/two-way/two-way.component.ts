import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  var1 = 0; 

  myObject:{a:string; b:number;} = {a:'dddd',b:2};

  myArray:[string,number,number,{a:string}] = ['a',2,4,{a:'222'}];

  someVar:string = '';
  
  constructor() { 

    this.var1 = '2222' as any as number;

    

    //someObject.DoThingA({
    //   ...
    //   ...
    //   return {dfsdfsdfsf} as 
    // } ).DoThingB();
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.someVar = "Hey " + (Math.random()*10).toString();
  }

  otherFunction() :{dd:number; aa:string;} {
    return {dd:2,aa:'ss'};
  }




















}
