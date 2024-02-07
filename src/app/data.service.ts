import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public studData:any;
  constructor(private http: HttpClient){
    this.studData=
    [ { name:"Alex",age:23,gender:"male",marks:46},
      {name:"Raj",age:45,gender:"male",marks:67}]
    }
getSampleData(){
  return this.studData;
}
fetchDataFromComp(per:any){
this.studData.push(per);
console.log(this.studData);
}
getApiData(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}
ReceiveData2(){
  this.http.get('https://jsonplaceholder.typicode.com/users');
}
getAsynPipe(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}
  }
