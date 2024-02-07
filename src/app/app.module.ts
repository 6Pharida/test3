import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PipeComponent } from './pipe/pipe.component';

import { ReactiveformComponent } from './reactiveform/reactiveform.component';


import { Custom1Pipe } from './custom1.pipe';

import { Custom3Pipe } from './custom3.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ChildComponent } from './life-cycle/child/child.component';
import { ServiceComponent } from './service/service.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Service2Component } from './service2/service2.component';
import { PracticeComponent } from './practice/practice.component';
import { Practice2Component } from './practice2/practice2.component';
import { RxJsOperatorComponent } from './rx-js-operator/rx-js-operator.component';
import { Practice3Component } from './practice3/practice3.component';
import { Service3Component } from './service3/service3.component';
import { Practice4Component } from './practice4/practice4.component';
import { Custom2Directive } from './directive/custom2.directive';
import { PromiseComponent } from './promise/promise.component';
import { PraticalComponent } from './pratical/pratical.component';
import { MyInterceptor } from './my.interceptor';
import { Service4Component } from './service4/service4.component';
import { Practical2Component } from './practical2/practical2.component';
import { Practical3Component } from './practical3/practical3.component';
import { Practical5Component } from './practical5/practical5.component';
import { Practice5Component } from './practice5/practice5.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    TemplateFormComponent,
    PipeComponent,
  
    ReactiveformComponent,
    
    
    Custom1Pipe,
              
              Custom3Pipe,
              LifeCycleComponent,
              CustomDirectiveDirective,
              ChildComponent,
              ServiceComponent,
              Service2Component,
              PracticeComponent,
              Practice2Component,
              RxJsOperatorComponent,
              Practice3Component,
              Service3Component,
              Practice4Component,
              Custom2Directive,
              PromiseComponent,
              PraticalComponent,
              Service4Component,
              Practical2Component,
              Practical3Component,
              Practical5Component,
              Practice5Component
    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
