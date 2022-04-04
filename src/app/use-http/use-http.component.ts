import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {


  users:any = [];

  constructor(private _myHttp:MyHttpService) { 
      this
        ._myHttp
        .getUsers()
        .subscribe( (usersFromServer) =>{
            this.users = usersFromServer;
        })
  }

  ngOnInit(): void {
  }

}
