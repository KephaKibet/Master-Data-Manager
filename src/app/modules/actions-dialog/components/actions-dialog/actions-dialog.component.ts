import { Component } from '@angular/core';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { MaterialInterface } from 'src/app/shared/interfaces/material.interface';

@Component({
  selector: 'app-actions-dialog',
  templateUrl: './actions-dialog.component.html',
  styleUrls: ['./actions-dialog.component.css']
})
export class ActionsDialogComponent {

  constructor(
    private modalReference:ModalReference<MaterialInterface>
  ) { 
    
  }

  public cancel(): void {
    this.modalReference.cancel()
  }

  public saveData(): void {
    this.modalReference.closeSuccess()
  }
}
