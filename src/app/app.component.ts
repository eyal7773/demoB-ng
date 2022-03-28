import { Component } from '@angular/core';
import {Cake} from './Cake';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoB';

  cakes:Cake[] =[];
  someData:number = 1;

  name:string = '';

  constructor() {
    this.fillCakes();
  }

  fillCakes() {
    this.cakes.push({name:'עוגת גבינה', score:10});
    this.cakes.push({name:'עוגת גזר', score:6});
    this.cakes.push({name:'עוגת שוקולד', score:8});
  }


  addNumber() : void {
    this.someData++;
  }

  changeName(name:string) {
    this.name = name;
  }








}
