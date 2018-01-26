import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ViewMyActivity} from './viewmyactivity.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMyActivity ,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiwMyActivityRoutingModule {}
