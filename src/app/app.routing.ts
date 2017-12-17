import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'profile',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'about',
        loadChildren: './views/about/about.module#AboutModule'
      },
      {
        path: 'myevent',
        loadChildren: './views/my-event/my-event.module#MyEventModule'
      },
       {
        path: 'mainevent',
        loadChildren: './views/main-event/main-event.module#MainEventModule'
      },
      {
        path: 'eventbody',
        loadChildren: './views/event-body/event-body.module#EventBodyModule'
      },
      {
        path: 'eventlogin',
        loadChildren: './views/eventlogin/eventlogin.module#EventloginModule'
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
