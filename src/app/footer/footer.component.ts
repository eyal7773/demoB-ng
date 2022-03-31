import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user:any = {};

  /*
    רשימת התלויות שניתן להזריק 
    UsersService

  */

  constructor(private usersService:UsersService) { 
    this.user = this.usersService.getUser();
    
    console.log(this.usersService.a);

  }

  ngOnInit(): void {
  }

  hhh(){
    
  }

}
