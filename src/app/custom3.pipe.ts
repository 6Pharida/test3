import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom3'
})
export class Custom3Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value);
    // console.log(args);
    // return value / args[0];
    // return value+args[0];
    
  // }
  // if(args[0]=="female"){
// return "Miss "+value
//   }
//   else{
//     return "Mr "+value;
//   }
if(args[0]=="male"){
return "Mr "+value
}
  
}


}
