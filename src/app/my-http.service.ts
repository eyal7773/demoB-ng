import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private client:HttpClient) { 

  }

  getUsers() {
    return this.client.get('https://jsonplaceholder.typicode.com/users');
  }


}
