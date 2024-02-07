import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  public data="Welcome to codeng";
  public date=new Date();
public data2=[{
fname:"pharida",
lname:"bakshi",
age:25
}]
public data3: any="NEW LIFE";
public salary =20000;
public gender1:string="male"
public gender:String="female";
public name2="Javed"
public name1:string="Pharida";
public salary1:number=4000;
public salary2:number=8000;
public salary3:number=4000;

}
