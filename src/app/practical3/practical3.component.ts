import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-practical3',
  templateUrl: './practical3.component.html',
  styleUrls: ['./practical3.component.css']
})
export class Practical3Component {
public name="Pharida"
public link="https://www.google.co.in"
onClick(){
  console.log("hello code ng")
}
public country="India"
public age=40;
public subject:any=['marathi','hindi']
public Fruits:any="Banana"
public name1:any="aayan"
public car:any={name:"Audi",model:"2024"}
public date=new Date()
public salary:any=3000
public name2:any="Prakash Mane"
public gender="male"
public formData:any=[]
onSubmit(data:any){
console.log(data)
this.formData.push(data.value)
}
public MyForm:any;
constructor(private ted:FormBuilder){
this.MyForm=this.ted.group({
  fname:[''],
  lname:['']
})
}
OnSubmit2(){
  console.log(this.MyForm.value)
}

}
