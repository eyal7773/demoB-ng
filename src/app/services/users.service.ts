import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any = {
    name:'Moses',
    email:'moses@gmail.com'
  }

  a:number = 0;

  constructor() {

    this.a = 10;
   }

  getUser() {
    return this.user;
  }
}
