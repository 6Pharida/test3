import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom1'
})
export class Custom1Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // if(args[0]=="female"){
      // return "Miss " +value
    // } 
    // else{ return "Mr " +value
  //  }
  
// console.log(value);
// console.log(args);
// return value+args[0];
  // console.log(value);
  // console.log(args);
  // if(args[0]=="male"){
    // return "Mr "+value
  // } 

//   if(args[0]=="male"){
// return "MR "+value
//   }
return value/args[0];
    }
}
