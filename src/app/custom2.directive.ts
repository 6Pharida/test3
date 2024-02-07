import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive {
public age:any=40;
  constructor(private select:ElementRef) {
     
console.log(this.select.nativeElement);
if(this.age>30){
 this.select.nativeElement.style.color="pink";
}

  }

}
