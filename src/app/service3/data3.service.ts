import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {
public baseurl:any;
  constructor(private http:HttpClient ) {

   }
   getApi(){
    return this.http.get('https://fakestoreapi.com/products/');
   }
   sendApi(dt:any){
    return this.http.post(this.baseurl,dt)

   }
   updateApi(dt:any){
    return this.http.put(this.baseurl+dt.id,dt)

   }
   deleteApi(dt:any){
    return this.http.delete(this.baseurl+dt)

   }
   // 2 nd service in  practice component
   getinformation(){
    return this.http.get('https://reqres.in/api/users?page=2')
   }
   DeleteInformation(data:any){
    return this.http.delete('https://reqres.in/api/users/2'+data)
   }
   UpdateInformation(t:any){
    return this.http.put('https://reqres.in/api/users/2'+t.id,t)
   }
}
