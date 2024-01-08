import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCreationRoutingModule } from './new-creation-routing.module';
import { NewCreationComponent } from './components/new-creation/new-creation.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NewCreationComponent
  ],
  imports: [
    CommonModule,
    NewCreationRoutingModule,
    MatIconModule
  ]
})
export class NewCreationModule { }
