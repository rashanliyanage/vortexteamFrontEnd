import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ViewerDashbord } from './viewer-dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: ViewerDashbord,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VewerDashboardRoutingModule {}
