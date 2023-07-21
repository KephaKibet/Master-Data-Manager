import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialSearchRoutingModule } from './materialSearch-routing.module';
import { MaterialSearchComponent } from './components/material-search.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MaterialSearchComponent
  ],

  imports: [
    CommonModule,
    MaterialSearchRoutingModule,
    ReactiveFormsModule,MatIconModule
  ]
})
export class MaterialSearchModule { }