import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ViewerDashbord} from './viewer-dashbord.component';
import {VewerDashboardRoutingModule} from './viewer-dashbord.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    VewerDashboardRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ ViewerDashbord ]
})
export class ViewerDashboardModule { }
