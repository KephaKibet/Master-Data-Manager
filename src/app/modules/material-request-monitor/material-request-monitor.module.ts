import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { MaterialRequestMonitorRoutingModule } from './material-request-monitor-routing.module';
import { MaterialRequestMonitorComponent } from './components/material-request-monitor/material-request-monitor.component';

@NgModule({
  declarations: [MaterialRequestMonitorComponent],
  imports: [
    CommonModule,
    MaterialRequestMonitorRoutingModule,
    MatIconModule,
  ]
})
export class MaterialRequestMonitorModule { }
