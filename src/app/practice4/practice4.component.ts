import { Component } from '@angular/core';

@Component({
  selector: 'app-practice4',
  templateUrl: './practice4.component.html',
  styleUrls: ['./practice4.component.css']
})
export class Practice4Component {
  public test1="HELLO";
  public test2="https://cidco.nivarakendra.in";
  public test3="Pharida"
  public age:any=40;
  public fruits:any=['banana','apple','grapes']
  public country="pakisthan"
  public name="ram"
  public salary:any=3000;
  public studData:any={name:"neha",age:23}
  public date:any=new Date();
  public mark:any=20;
  public name1:any="ABDUL KALAM"
  public gender:any="male";
constructor(){

}
onClick(){
  console.log("Welcome");
}
}
