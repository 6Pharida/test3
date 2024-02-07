import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive {

  constructor(private ele:ElementRef ) {
    console.log(this.ele.nativeElement)
    this.ele.nativeElement.style.background="yellow";

   }

}
