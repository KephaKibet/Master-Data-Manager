import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotificationsComponent } from './components/notifications.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    ReactiveFormsModule,MatIconModule
  ]
})
export class NotificationsModule { }
