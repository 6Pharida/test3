import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // http request modification using interceptor
    const modifiedRequest = request.clone({
      setHeaders:{
        'name-custom-header':'pharida'
      }
    })
    console.log(modifiedRequest);
    return next.handle(modifiedRequest);
  }
}
