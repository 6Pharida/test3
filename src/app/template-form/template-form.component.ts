import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
public theader:string []=["fname","lname","email","gender","mobile","password","country"]
public formdata:any=[]
public count:number=1;
public selectedData:any={
  id:"",
  fname:"",
  lname:"",
  email:"",
  gender:"",
  mobile:"",
  password:"",
  country:""
}
  constructor(){

  }
  OnSubmitEmpData(data:any){
    console.log("Your Form is submitted")
    console.log(data)
    this.formdata.push(data.value)
    console.log(this.formdata)
    data.value.id=this.count
   this. count++
  }
public country:string []=['India','Austrilia','Spain','America']
onDataSelect(data:any){
  console.log(data);
  this.selectedData.id = data.id;
  this.selectedData.fname = data.fname;
  this.selectedData.lname = data.lname;
  this.selectedData.email = data.email;
  this.selectedData.gender = data.gender;
  this.selectedData.mobile = data.mobile;
  this.selectedData.pass = data.pass;
  this.selectedData.sub = data.sub;
}
onDataUpdate(tem:any){
  console.log(tem)
  this.formdata.forEach((element:any,index:any)=>{
    console.log(element.id,tem.value.id);

    this.formdata.splice(index,1,tem.value);
  })

}
onDelete(may:any){
  console.log(may)

this.formdata.forEach((element:any,index:any)=>{
if(element.id==may.id){
  this.formdata.splice(index,1)

} 
})
  

}
onSubmit1(data1:any){
  console.log(data1);
  this.formdata1.push(data1.value)
  
}
public Subject:any=["Math","science","History"];
public theader1:string[]=["fname","lname","email","password","subject"]
public formdata1:any=[];
}
