import { Component } from '@angular/core';

@Component({
  selector: 'app-practical2',
  templateUrl: './practical2.component.html',
  styleUrls: ['./practical2.component.css']
})
export class Practical2Component {
constructor(){

}
public test1:any="This is my practical2"
public link:any='https://web.whatsapp.com'
onClick(){
  console.log("Today is Holiday")
}
public sample:any="Pharida"
public age:any=40;
public cricket:any=["name","age","country"]
public country:any="America"
}
