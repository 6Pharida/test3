import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Data3Service } from '../service3/data3.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  public sampleData:any;
  public sampleData1:any;
  constructor (private dt:DataService){
console.log(this.dt.studData);
this.functionMethod();
this.sendDataFromComp();

this.getData();

  }
functionMethod(){
  this.sampleData=this.dt.getSampleData();
  console.log(this.sampleData);
}
sendDataFromComp(){
  var studData={name:"pharida",age:45,Marks:73};

  this.dt.fetchDataFromComp(studData);
}
getData(){
  this.dt.getApiData().subscribe(
    (res:any)=>{
      console.log(res);
      this.sampleData1=res;
    },
    (err:any)=>{
console.log(err);
    }
  )
  
}

  


}
