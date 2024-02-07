import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
public empForm:any;
public subject:any=["math","english","sci","history"]
public isFormSubmit:boolean=false;
public theader:string[]=["fname","lname","email","gender","password","subject"]
public formdata:any=[];
public count=1;
  constructor( private ted:FormBuilder){
    this.empForm = this.ted.group({
      id:[""],
      fname:[""],
      lname:[""],
      email:[""],
      gender:[""],
      password:[""],
      subject:[""],
      
    })}
  
      onSubmitData(){
    console.log(this.empForm.value)
    this.empForm.value.id=this.count;
    this.count++
    this.empForm.isFormSubmit=true;
    this.formdata.push(this.empForm.value)
  }
     get f(){
      return this.empForm.controls;

     } 
     onDelete(may:any){
      console.log(may)
    
    this.formdata.forEach((element:any,index:any)=>{
    if(element.id==may.id){
      this.formdata.splice(index,1)}
    
    })
  
     }}
      

    
    

    

    

    



