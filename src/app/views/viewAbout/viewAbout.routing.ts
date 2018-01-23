import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ViewAbout } from './viewAbout.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAbout ,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiweAboutRoutingModule {}
