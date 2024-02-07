import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-pratical',
  templateUrl: './pratical.component.html',
  styleUrls: ['./pratical.component.css']
})
export class PraticalComponent {
  public obs1:any=[23,45,67,89]
  public obs2:any;
  public myForm1 :any;
constructor(private ted:FormBuilder){
  this.myForm1=this.ted.group({
    fname:[""],
    lname:[""]

  })
  

  

  this.obs2=from(this.obs1)
  console.log(this.obs2)
  this.obs2.subscribe({
    next:(res:any)=>{console.log(res)}, 
error:(err:any)=>{console.log(err)}

    
    

  })
}
public name="pharida";
public path='https://www.facebook.com'
onClick(){
  console.log("Welcome")
}
public test1="Aayan"
public age:any=30;
public name1:any=["Neha","Nikita","Ram"]
public country:any="America"
public collection :any=[];
onSubmit(data:any){
console.log(data);
this.collection.push(data.value)
}
onSubmitData(){
  console.log(this.myForm1)
  this.isSubmitted=true;
}
public isSubmitted:any=false;
get f(){
   return this.myForm1.controls
 }

}


