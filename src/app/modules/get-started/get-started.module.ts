import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { HelpComponent } from './components/help/help.component';


@NgModule({
  declarations: [
    HelpComponent 
  ],
  imports: [
    CommonModule,
    GetStartedRoutingModule
  ]
})
export class GetStartedModule { }
