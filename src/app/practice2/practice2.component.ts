import { Component } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component {
public test1:string="pharida";
public link:any="https://cidco.nivarakendra.in";
onClick(){
  console.log("this is an example of event binding")
}
public sample:any="Alex";
public name:string="ram";
public age:number=30;
 public studData:any=["neha","Nikita","Soham"]
 public name1:string="pharida"
 public salary:number=2000;
 public sample1:any="WELCOME"
 std={
  name:"pharida",
  age:23
 }
 public count:number=1;
  public date=new Date();
  public name2:any="PRAKASH AMATE"
  public gender:string="male"
public formdata:any=[]
  onSubmit(dt:any){
console.log(dt.value);
this.formdata.push(dt.value)
console.log(this.formdata)
dt.value.id=this.count
this. count++



  }
  public coun:any=["India","Pakisthan","China"]
  public header:any=["First Name","Last Name","Password","Email","Country"]
public selectedData:any={
  id:'',
  fname:'',
  lname:'',
  password:'',
email:'',
  country:''

}
onDataSelect(data:any){
console.log(data);
this.selectedData.id=data.id
this.selectedData.fname=data.fname
this.selectedData.lname=data.lname
this.selectedData.password=data.password
this.selectedData.email=data.email
this.selectedData.country=data.country
}
onUpdate(upt:any){
console.log(upt.value)
this.formdata.forEach((element:any,index:any)=>{
  if(element.id==upt.value.id){
    this.formdata.splice(index,1,upt.value);
  }
  // console.log(element.id,upt.value.id);
  
})
}

  onDelete(say:any){
    console.log(say)
    this.formdata.forEach((element:any,index:any)=>{
      if(element.id== say.id){
        this.formdata.splice(index,1)

      }

    })
     

  



     

     

     
    

  }
}
