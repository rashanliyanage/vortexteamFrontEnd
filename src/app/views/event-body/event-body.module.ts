import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EventBodyComponent } from './event-body.component';
import {EventBodyRoutingModule } from './event-body.routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  imports: [
    EventBodyRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ EventBodyComponent,FilterPipe ]
})
export class EventBodyModule { }
