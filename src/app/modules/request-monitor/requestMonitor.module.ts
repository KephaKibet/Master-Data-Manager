import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RequestMonitorComponent } from './components/request-monitor.component';
import { RequestMonitorRoutingModule } from './requestMonitor-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RequestMonitorComponent
  ],
  imports: [
    CommonModule,
    RequestMonitorRoutingModule,
    ReactiveFormsModule,MatIconModule
  ]
})
export class RequestMonitorModule { }
