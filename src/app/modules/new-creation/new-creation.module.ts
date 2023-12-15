import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCreationRoutingModule } from './new-creation-routing.module';
import { NewCreationComponent } from './components/new-creation/new-creation.component';


@NgModule({
  declarations: [
    NewCreationComponent
  ],
  imports: [
    CommonModule,
    NewCreationRoutingModule
  ]
})
export class NewCreationModule { }
