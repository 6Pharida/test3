import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Data3Service } from '../service3/data3.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  public myForm:any;
  public formData1:any=[];
  public isFormData:boolean=false;
  public tableData:any;
  constructor( private fb:FormBuilder,private ser1:Data3Service){
this.myForm=this.fb.group({
id:[""],
email:[""],
first_name:[""],
last_name:[""],
avatar:[""]
})
this.Receive()
  }
public test1:string="Welcome to Codeng";
public link="https://cidco.nivarakendra.in"
public img="assets/image1.jpeg"
onClick(){
  console.log("hello")
} 
public sample:any="tom"
public age:number=30;
public fruits :string[]=["mango","banana","graphes"]
public name:string="ram"
public name1:string="Nikita"
public date:any=new Date();
public salary:number=3000;
public text:string="WELCOME"
student={
  name:"Pharida",
  age:23,
  edu:"MA"
}
public count:number=10;
public count1:number=20;
public gender:string="female"
public name2:string="Ramesh"
public gender2:string="male"
public formData:any=[]
onSubmit(det:any){
  console.log(det)
  this.formData.push(det.value)
  
}
public theader:any=["first Name","Last Name","password"]
onSubmit1(){

console.log(this.myForm.value);
this.myForm.isFormData=false; 
this.formData.push(this.myForm.value)
}
get f(){
  return this.myForm.controls;
}
Receive(){  
  this.ser1.getinformation().subscribe(
    (res:any)=>{
      console.log(res);
      this.tableData=res
    },
    (err:any)=>{
      console.log(err);
    }
  )
    
    
  
}
onDelete(x:any){
  this.ser1.DeleteInformation(x.id).subscribe(
    (res:any)=>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    }
  )
  this.tableData.data.forEach((e:any,i:any)=>{
    if(e.id==x.id){
      return this.tableData.data.splice(i,2)
    }
  })
}
onUpdate(){
  this.ser1.UpdateInformation(this.myForm.value).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.tableData.data.forEach((e:any,i:any)=>{
        if(e.id==res.id){
           this.tableData.data.splice(i,1,res)
        }
      })
    },
    error:(err:any)=>{
      console.log(err)
    }
  }

  )

  
}
onEdit(m:any){
  this.myForm.setValue({
    id:m.id,
    email:m.email,
    first_name:m.first_name,
    last_name:m.last_name,
    avatar:m.avatar
  })
}
}