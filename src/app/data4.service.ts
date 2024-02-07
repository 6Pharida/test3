import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data4Service {

  constructor(private http:HttpClient) {

   }
   getApiData(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
   }
}
