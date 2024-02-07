import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-practice5',
  templateUrl: './practice5.component.html',
  styleUrls: ['./practice5.component.css']
})
export class Practice5Component {
   public AsyncData:any
constructor(private ser1: DataService){
this.GetAsynData();
}
GetAsynData(){
this.AsyncData=this.ser1.getAsynPipe();
console.log(this.AsyncData);
}
}
