import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialCatalogueSearchRoutingModule } from './material-catalogue-search-routing.module';
import { MaterialCatalogueSearchComponent } from './components/material-catalogue-search/material-catalogue-search.component';


@NgModule({
  declarations: [
    MaterialCatalogueSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialCatalogueSearchRoutingModule
  ]
})
export class MaterialCatalogueSearchModule { }
