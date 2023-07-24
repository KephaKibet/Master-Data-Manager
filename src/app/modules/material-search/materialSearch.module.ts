import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialSearchRoutingModule } from './materialSearch-routing.module';
import { MaterialSearchComponent } from './components/material-search.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    MaterialSearchComponent
  ],

  imports: [
    CommonModule,
    MaterialSearchRoutingModule,
    ReactiveFormsModule,MatIconModule,MatTableModule,
  ]
})
export class MaterialSearchModule { }
