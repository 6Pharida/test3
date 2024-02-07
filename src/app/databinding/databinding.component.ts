import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
test4 :string="DATA BINDING"
test5:string="TYPES OF DATA BINDING:"
test6:string="1)Iterpolation binding,2)Attribute binding,3)event binding,4)two way data binding"
test7:string="Interpolation binding means binding data component.ts to component.html";
test8:any="this example of interpolation"
public link="https://cidco.nivarakendra.in"
uname: string=""

public test11:number=25;
public link3="https://cidco.nivarakendra.in"
public number=45;
onClick(){
  console.log("This is event binding")
}

Text:string="example of data binding"
public link1="https://www.youtube.com";
public link2="https://www.facebook.com";
public age1=18;
onclick(){
  console.log("example of event");

}
username :string="Alex";
public path="assets/image.avif";
public path1="assets/image1.jpeg";
onClick1(){
  console.log("save button data")

}
public FirstName:string="";

}