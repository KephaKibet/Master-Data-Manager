import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GetStartedRoutingModule } from './getStarted-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { GetStartedComponent } from './components/get-started.component';

@NgModule({
  declarations: [
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    GetStartedRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class GetStartedModule { }
