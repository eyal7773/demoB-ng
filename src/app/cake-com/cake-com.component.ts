import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../Cake';

@Component({
  selector: 'app-cake-com',
  templateUrl: './cake-com.component.html',
  styleUrls: ['./cake-com.component.css']
})
export class CakeComComponent implements OnInit {

  constructor() { }


  @Input() cake:Cake = {name:'',score:0}
  ngOnInit(): void {
  }

}
