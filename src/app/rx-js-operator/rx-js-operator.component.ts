import { Component } from '@angular/core';
import { concat, filter, from, map, merge, of, pluck, take } from 'rxjs';

@Component({
  selector: 'app-rx-js-operator',
  templateUrl: './rx-js-operator.component.html',
  styleUrls: ['./rx-js-operator.component.css']
})
export class RxJsOperatorComponent {
public arr:any=[1,2,3,4,5,6,7,8];
public obs1:any;
public obs2:any; 
public obs3:any;
public obs4:any;
public obs5:any;
public obs6:any;
public obs7:any; 

  constructor(){
this.obs1=from(this.arr);
this.obs2=of(10,20,30,40,50);
const data=from([{name:"Alex"},{name:"Ram"},{name:"neha"}])
this.obs3=data.pipe(pluck('name'));
this.obs4=this.obs2.pipe(
  map((x:any)=> x*2),
  filter((y:any)=> y>30)
)
this.obs5=this.obs1.pipe(take(2));
console.log(this.obs5);
const obsA=of(100,200)
const obsB=of(400,500)
this.obs6=merge(obsA,obsB)

const obsD=of(30,40)
const obsE=of(50,60)
this.obs7=concat(obsD,obsE);




console.log(this.obs1);

console.log(this.obs2);
console.log(this.obs3);
console.log(this.obs6);
console.log(this.obs7);
this.obs1.subscribe({
  next:(res:any)=>console.log(res),
  error:(err:any)=>console.log(err)  })
  this.obs2.subscribe({
    next:(res:any)=>console.log(res),
    error:(err:any)=>console.log(err)
  })
  this.obs3.subscribe({
    next:(res:any)=>console.log(res),
    error:(err:any)=>console.log(err)
  })
  this.obs4.subscribe({
    next:(res:any)=>console.log(res),
    error:(err:any)=>console.log(err)
  })
  this.obs5.subscribe({
    next:(res:any)=>console.log(res),
    error:(err:any)=>console.log(err)
  })
  this.obs6.subscribe({
    next:(res:any)=>console.log(res),
    error:(err:any)=>console.log(err)
  })
  this.obs7.subscribe({
    next:(res:any)=>console.log(res),
    error:(err:any)=>console.log(err)
   })

}}











