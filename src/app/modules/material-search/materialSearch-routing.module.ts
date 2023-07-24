import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialSearchComponent } from './components/material-search.component';

const routes: Routes = [
  {
  path: '',
  redirectTo:'/material-search',
  pathMatch: 'full',
},
  {
    path:'',
    component: MaterialSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialSearchRoutingModule { }
