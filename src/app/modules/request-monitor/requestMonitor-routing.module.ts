import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestMonitorComponent } from './components/request-monitor.component';



const routes: Routes = [
  {
    path:'',
    component: RequestMonitorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestMonitorRoutingModule { }
