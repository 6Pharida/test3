import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }
   getPromiseData():Promise<any>{
    return this.http.get('https://reqres.in/api/users?page=2').toPromise();
   }
    async getAsyncAwait():Promise<any>{
    try{
      return await this.http.get('https://reqres.in/api/users?page=2').toPromise();
    }
    catch(error){
      throw error;
    }

   }

   getAsyncPipe(){
    return this.http.get('https://reqres.in/api/users?page=2');
   }
}
