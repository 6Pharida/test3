import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent {
  public prom: any;
  public AsyncData :any;
  constructor(private api: ApiService) {
    console.log('Hello');
    this.getPromData()
    this.getAsyncAwaitData()
    this.getAsyncPipeData()
  }

  ngOnInit() {
    console.log("Hello")
    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise task done successfully")
        reject("promise task failure")
      }, 3000);
    });
    this.prom
      .then((res:any)=>{
        console.log(res)
      })
      .catch((err:any)=>{
        console.log(err)
      })
  

  }
  getPromData(){
    this.api.getPromiseData()
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
console.log(err);
    })
  }
  getAsyncAwaitData(){
    return this.api.getAsyncAwait()
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
      console.log(err);
    })
  }
  getAsyncPipeData(){
    this.AsyncData= this.api.getAsyncPipe();
    console.log(this.AsyncData);
  }
}
