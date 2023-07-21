
// const appRoutes: Routes = [ 
//  { path: '', redirectTo: '/', pathMatch: 'full' },
//  { path: '', component: MaterialSearchComponent },
//  { path: 'creation-requests', component: RequestMonitorComponent },
//  { path: 'notifications', component: NotificationsComponent },
//  { path: 'tasks', component: TasksComponent },
//  { path: 'help', component: GetStartedComponent },
//  { path: 'new-creation', component: NewCreationComponent },
//  { path: '**', redirectTo: '/' } 
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { LoginGuard } from './shared/guards/login/login.guard';



const routes: Routes = [

{
  path:'',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children:[
    {
      path:'',
      redirectTo:'/material-search',
      pathMatch: 'full',
    },

    // material-search
    {
      path:'material-search',
      loadChildren: () => import('./modules/material-search/materialSearch.module').then((m) => m.MaterialSearchModule),
    },

    // requestMonitor
    {
      path:'request-monitor',
      canActivate: [AuthGuard],
      loadChildren: () => import('./modules/request-monitor/requestMonitor.module').then((m) => m.RequestMonitorModule),
    },

    {
        path: 'notifications',
        loadChildren: () => import('./modules/notifications/notifications.module').then((m) => m.NotificationsModule),
      },
      {
        path: 'tasks',
        loadChildren: () => import('./modules/tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        path: 'help',
        loadChildren: () => import('./modules/get-started/getStarted.module').then((m) => m.GetStartedModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./modules/new-creation/newCreation.module').then((m) => m.NewCreationModule),
      }
      ]
},

{
path:'',
component:AuthLayoutComponent,
canActivate: [LoginGuard],
children:[
   // LOGIN
   {
    path:'login',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
