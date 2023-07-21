import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewCreationComponent } from './components/new-creation.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path:'',
    component: NewCreationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatIconModule],
  exports: [RouterModule]
})
export class NewCreationRoutingModule { }
