import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path:'',
        redirectTo:'/material-catalogue-search',
        pathMatch: 'full',
      },
      {
        path:'material-catalogue-search',
        loadChildren: () => import('./modules/material-catalogue-search/material-catalogue-search.module').then((m) => m.MaterialCatalogueSearchModule)
      },
      {
        path:'request-monitor',
        loadChildren: () => import('./modules/material-request-monitor/material-request-monitor.module').then((m) => m.MaterialRequestMonitorModule),
      },
      {
        path:'material-creation',
        loadChildren: () => import('./modules/new-creation/new-creation.module').then((m) => m.NewCreationModule),
      },
  
      {
        path:'notifications',
        loadChildren: () => import('./modules/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path:'tasks',
        loadChildren: () => import('./modules/tasks/tasks.module').then((m) => m.TasksModule)
      },
      {
        path:'get-started',
        loadChildren: () => import('./modules/get-started/get-started.module').then((m) => m.GetStartedModule)
      },
      {
        path:'account-settings',
        loadChildren: () => import('./modules/setings/settings.module').then((m) => m.SettingsModule)
      }
    ]
  },
  
  {
  path:'',
  component:AuthLayoutComponent,
  // canActivate: [LoginGuard],
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
