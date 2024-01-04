import { Component } from '@angular/core';
import { ELEMENT_DATA } from 'src/app/tableData';

@Component({
  selector: 'app-material-request-monitor',
  templateUrl: './material-request-monitor.component.html',
  styleUrls: ['./material-request-monitor.component.css']
})
export class MaterialRequestMonitorComponent {
  displayedColumns = ['ERPNumber', 'state', 'descriptor', 'shortFormatDescription','purchaseOrderDescription','insertedAt'];
  dataSource = ELEMENT_DATA;


}
