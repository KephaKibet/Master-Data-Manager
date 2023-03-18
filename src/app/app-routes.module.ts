import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialSearchComponent } from './material-search/material-search.component';
import { RequestMonitorComponent } from './request-monitor/request-monitor.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TasksComponent } from './tasks/tasks.component';



const appRoutes: Routes = [ 
 { path: '/', component: MaterialSearchComponent },
 { path: 'creation-requests', component: RequestMonitorComponent },
 { path: 'notifications', component: NotificationsComponent },
 { path: 'tasks', component: TasksComponent },
 { path: 'help', component: GetStartedComponent },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes), 
  ]

  // exports: [
  //   RouterModule 
  //   ],
})
export class AppRoutesModule { }
