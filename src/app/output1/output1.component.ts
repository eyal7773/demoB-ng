import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.css']
})
export class Output1Component implements OnInit {

  a:string|number = '';

  @Output() changeNameEvent = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
