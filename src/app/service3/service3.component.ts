import { Component } from '@angular/core';
import { Data3Service } from './data3.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.css'],
})
export class Service3Component {
  public studData:any;
  public sample1: any;
  constructor(private dt: Data3Service,private dx:FormBuilder) {
    this.studData=this.dx.group({
     id:[""],
     title:[""],
     price:[""],
     description:[""],
     category:[""],
     image:[""] 
    }

    )
    this.getData();
    
  }
  onsubmitData(){
    return this.dx
  }

  getData() {
    this.dt.getApi().subscribe(
      (res: any) => {
        console.log(res);
        this.sample1 = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
 
  }
  onDeleteData(d:any){
    this.dt.deleteApi(d.id).subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }})
    
    this.sample1.forEach((e:any,i:any) =>{
if(e.id==d.id){
  this.sample1.splice(i,1)
}
    })
  
  }
  onEdit(data:any){
    console.log(data)
    this.studData.setValue({
      id:data.id,
      title:data.title,
      price:data.price,
      description:data.description,
      category:data.category,
      image:data.image
    })

    

  }
   onUpdatedData(){
     this.dt.updateApi(this.studData.value).subscribe(
      (res:any)=>{
        console.log(res);
        this.sample1.forEach((e:any,i:any)=>{
          if(e.id==res.id){
this.sample1.splice(i,1,res)
          }
        })
      },
      (err:any)=>{
        console.log(err)
      }
     )
         
    
    
    
    }
       
       
       
       
       
       
        }
      
       
       

    
 

