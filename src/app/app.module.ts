import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionsDialogComponent } from './modules/actions-dialog/components/actions-dialog/actions-dialog.component';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { ModalModule } from '@developer-partners/ngx-modal-dialog';

// import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ActionsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SatPopoverModule,
    ModalModule 
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
