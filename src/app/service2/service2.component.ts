import { Component } from '@angular/core';
import { Data2Service } from './data2.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component {
  
  public sampleData :any;
  public sampleData1:any;
constructor(private dt: Data2Service){
console.log(this.dt.studData)
this.functionMethod();
this.sendDataComp();
this.getData();
this.sendFormData();
this.UpdateFormData();
this.DeleteFormData();
}
functionMethod(){
  this.sampleData=this.dt.getDataFrmService()
  console.log(this.sampleData);
}
sendDataComp(){
 var studData={name:"neha",age:34,gender:"female"}
  this.dt.Datafetch(studData);
}
//real time data fetch
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
sendFormData(){
  let formData={
    "name":"pharida",
    "job":"TCS"
  }
  this.dt.sendApiData(formData).subscribe(
    (res:any)=>{
    console.log(res);}
  ),
  (err:any)=>{
    console.log(err);
  }
}
// updating data at backend
UpdateFormData(){
  let formData={
    "id":5,
    "name":"Ram",
    "job":"Codeng"
  }
  this.dt.UpdateApiData(formData).subscribe(
    (res:any)=>{
      console.log(res),
      (err:any)=>{
        console.log(err)
      }
      
    }
  )
}
//delete data at backend
DeleteFormData(){
  let formData={
    "id":5,
    "name":"Ram",
    "job":"Codeng"
  }
this.dt.DeleteApiData(formData.id).subscribe(
  (res:any)=>{
console.log(res)
  },
  (err:any)=>{
console.log(err)
  }
)
}


}

