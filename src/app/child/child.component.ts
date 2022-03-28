import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() {

    let a = Math.floor(Math.random()*10);
    console.log(a);

   }




  @Input() bubu = 0
  ngOnInit(): void {
  }

}
