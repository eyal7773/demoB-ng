import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  user:any = {};

  constructor(private usersService:UsersService) { 
    this.user = this.usersService.getUser();
    this.usersService.a = 20;
    /*
    var a = new service1();
    var a = new service1('234234',.234324');
    var a = new service1();
    var a = new service1();
    var a = new service1();
    var a = new service1();



    */
  }

  ngOnInit(): void {
  }

}
