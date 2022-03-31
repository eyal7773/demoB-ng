import { Component, OnInit } from '@angular/core';

export enum BUBU {
  A,
  B
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  to:BUBU = BUBU.A;
  total:number = 459.56656;
  fee:number = 0.73546;
  birth:Date = new Date('1980-08-07');
  
  hobby:any = {
    title:'surf',
    isRisky:true
  }


  constructor() { 

    for (var enumMember in BUBU) {
      console.log("enum member: ", enumMember);
   }

  }

  ngOnInit(): void {
  }

}
