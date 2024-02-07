import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component {
  public myForm:any;
  public subject:any=["Math","History","science"];
  public isformsub:any=false;
  public theader:any=["Full Name","Last Name","Email","password","subject"]
  public newData:any=[];
constructor( private fb :FormBuilder){
this.myForm=this.fb.group({
FullName :['',[Validators.required]],
LastName:['',[Validators.required]],
// Email:['',[Validators.required,Validators.pattern(("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"))]],
Email:['', [Validators.required , Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
password:['',[Validators.required]],
subj:['',[Validators.required]]
}

)



}
onSubmit(){
  this.isformsub=true;
  
  // console.log(this.myForm)
}
onSubmit1(){
  this.newData.push(this.myForm.value);
  console.log("newData")
}
get f(){
  return this.myForm.controls;
}
}
// [Validators.required,Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")]