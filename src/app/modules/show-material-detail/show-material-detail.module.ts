import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMaterialDetailComponent } from './components/show-material-detail/show-material-detail.component';
import{MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    ShowMaterialDetailComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ShowMaterialDetailModule { }
