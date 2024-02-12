import { Component } from '@angular/core';
import { ActionsDialogComponent } from 'src/app/modules/actions-dialog/components/actions-dialog/actions-dialog.component';
import { ModalService } from '@developer-partners/ngx-modal-dialog';

import { HttpService } from 'src/app/shared/services/http/httpservice.service';

@Component({
  selector: 'app-material-request-monitor',
  templateUrl: './material-request-monitor.component.html',
  styleUrls: ['./material-request-monitor.component.css']
})
export class MaterialRequestMonitorComponent {
  displayedColumns = ['ERPNumber', 'state', 'descriptor', 'shortFormatDescription', 'purchaseOrderDescription', 'insertedAt'];
  dataSource?: any;

  constructor(
    private httpservice: HttpService,
    private modalService:ModalService
    // private dialog: MatDialog
  )
  {
    this.httpservice.get("materials").subscribe(data => {
      this.dataSource = data;
      // console.log(data);
    })
  }

  showOptions() {
    this.modalService.show(ActionsDialogComponent, {
      title: 'Material Item Options',
    })
 
    console.log("clicked");
    }
}
    
  
  
