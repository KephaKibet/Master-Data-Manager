import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


import { MaterialCatalogueSearchRoutingModule } from './material-catalogue-search-routing.module';
import { MaterialCatalogueSearchComponent } from './components/material-catalogue-search/material-catalogue-search.component';



@NgModule({
  declarations: [
    MaterialCatalogueSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialCatalogueSearchRoutingModule,
    MatIconModule,
    MatTableModule
  ]
})
export class MaterialCatalogueSearchModule { }
