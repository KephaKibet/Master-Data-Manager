import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { SideBarComponent } from './side-bar/side-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './tasks/tasks.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { MaterialSearchComponent } from './material-search/material-search.component';
import { RequestMonitorComponent } from './request-monitor/request-monitor.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    TasksComponent,
    NotificationsComponent,
    GetStartedComponent,
    RequestMonitorComponent,
    MaterialSearchComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
