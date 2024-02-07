import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {
constructor(){
  console.log("it is an constructor")
}

  ngOnChanges(){
    console.log("This is a onchanges method")
  }
  ngOnInit(){
    console.log("this is ngoninit method")

  }
  ngDoCheck(){
    console.log("this is an docheck")

  }
  ngAfterContentInit(){
    console.log("this an after content init")
  }
  ngAfterContentChecked(){
    console.log("this an after content checked")
  }
  ngAfterViewInit(){
    console.log("this is an after view Init")
  }
  ngAfterViewChecked(){
    console.log("this is an after view checked")
  }
}