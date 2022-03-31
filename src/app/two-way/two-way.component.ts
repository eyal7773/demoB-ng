import { Component, OnInit } from '@angular/core';

export enum Gender {
  Male =1 ,
  Female =2 ,
  ABinary =3, 
}

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  myEnum = Gender;

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

  otherFunction() :[number,boolean] {
    return [1,true];
  }

  functionThatReturnObject(myObj:{c:string,v:boolean} ):{a:number; b:boolean;} {
    return {a:1,b:true};
  }



  /**
   * 
   * Client 
   *   Form > Submit
   *          > HTTP Request ---> Sql / Firebase 
   * 
   * ASPNET (Client+Server  FunA - Show the form)  Form>Submit > HTTP Req
   *                            (Client+Server : FunB SQL) 
   * 
   * 
   * 
   */


















}
