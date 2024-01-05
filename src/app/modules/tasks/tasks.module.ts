import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatIconModule
  ]
})
export class TasksModule { }
