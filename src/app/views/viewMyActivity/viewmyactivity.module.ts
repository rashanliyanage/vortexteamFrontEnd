import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ViewMyActivity} from './viewmyactivity.component';
import {VeiwMyActivityRoutingModule} from './viewmyactivity.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    VeiwMyActivityRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ ViewMyActivity]
})
export class ViewMyActivitydModule { }
