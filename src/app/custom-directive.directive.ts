import { Directive,ElementRef  } from '@angular/core';

@Directive({   
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
// public rollNo:number=30;
public age:number=33;
  constructor (private ele: ElementRef){
// console.log(this.ele.nativeElement)

// if(this.rollNo>40){
//   this.ele.nativeElement.style.color="red";
//   this.ele.nativeElement.style.background="yellow";

// }
// else{
//   this.ele.nativeElement.style.color="green"
// }
  

//   }
  //   console.log(this.ele.nativeElement)
  //   if(this.rollNo==30)


  //   {this.ele.nativeElement.style.background="yellow"};
    // console.log(this.ele.nativeElement);
    // this.ele.nativeElement.style.background="aqua";

    console.log(this.ele.nativeElement)
    this.ele.nativeElement.style.color="pink"

   }
  }

 