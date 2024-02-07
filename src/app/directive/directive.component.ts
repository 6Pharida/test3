import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
age :number=30;
age1:number=30;
showdata:boolean=true;
public subject:any=['math','english','marathi'];
 public marks:any=['23','45','67']; 
 public country:string="India";
 public amount:number=20;

}

