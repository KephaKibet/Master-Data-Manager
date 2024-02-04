import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-material-detail',
  templateUrl: './show-material-detail.component.html',
  styleUrls: ['./show-material-detail.component.css']
})
export class ShowMaterialDetailComponent {
  firstName: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.firstName = data.name;
  }
}

