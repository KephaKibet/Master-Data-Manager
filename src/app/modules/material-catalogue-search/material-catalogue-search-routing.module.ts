import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialCatalogueSearchComponent } from './components/material-catalogue-search/material-catalogue-search.component';

const routes: Routes = [
  {
    path:'',
    component: MaterialCatalogueSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialCatalogueSearchRoutingModule { }
