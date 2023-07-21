import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewCreationComponent } from './components/new-creation.component';
import { NewCreationRoutingModule } from './newCreation-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NewCreationComponent
  ],
  
  imports: [
    CommonModule,
    NewCreationRoutingModule,
    ReactiveFormsModule,MatIconModule
  ]
})
export class NewCreationModule { }
