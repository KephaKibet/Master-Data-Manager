import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCreationComponent } from './components/new-creation/new-creation.component';

const routes: Routes = [
  {
    path:'',
    component: NewCreationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCreationRoutingModule { }
