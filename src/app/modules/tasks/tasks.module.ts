import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';


import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,MatIconModule
  ]
})
export class TasksModule { }
