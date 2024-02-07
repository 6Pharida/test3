import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {
  
  public baseUrl="https://reqres.in/";
 
    public studData :any;
  constructor(private http : HttpClient) {
    this.studData=[
      {name:"pharida",age:23,gender:"female"}
    ]
   }
   getDataFrmService(){
    return this.studData
   }
   Datafetch(tem:any){
this.studData.push(tem);
console.log(this.studData)
   }
   getApiData(){
     return this.http.get('https://reqres.in/api/users?page=2');
  }
  getApiData2(){
    // this.http.get(url)
    return this.http.get(this.baseUrl + "api/users?page=2");
  }
  // POST API:- to send data to backend
  // this.http.post(url,data,type of data(optional))
  // without passing type of data
  // return this.http.post(this.baseUrl + 'api/users',dt)

  // with passing type of data
  sendApiData(dt:any){
  const headers= new HttpHeaders({
'content-type':'application/json'
  })
  return this.http.post(this.baseUrl + 'api/users',dt,{headers})}
  UpdateApiData(dt:any){
   return this.http.put(this.baseUrl + 'api/users/'+ dt.id,dt)
  }
  DeleteApiData(dt:any){
return this.http.delete(this.baseUrl +'api/users/'+dt)
  }
}
  

