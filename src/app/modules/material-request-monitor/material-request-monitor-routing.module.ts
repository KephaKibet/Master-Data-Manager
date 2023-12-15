import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialRequestMonitorComponent } from './components/material-request-monitor/material-request-monitor.component';

const routes: Routes = [
  {
    path:'',
    component: MaterialRequestMonitorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRequestMonitorRoutingModule { }
