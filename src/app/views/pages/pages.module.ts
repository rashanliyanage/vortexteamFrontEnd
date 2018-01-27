import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {Publicevent} from './publicevent/publucevent';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [  HttpModule,PagesRoutingModule, FormsModule,CommonModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBCKHYty_-iUFsBbsGL_TJPiO-y8o_VHc4'
  }) ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    Publicevent
   
  ]
})
export class PagesModule { }
