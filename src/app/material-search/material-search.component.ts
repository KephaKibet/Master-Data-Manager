import { Component } from '@angular/core';
import {ELEMENT_DATA} from '../tableData'

@Component({
  selector: 'mdm-material-search',
  templateUrl: './material-search.component.html',
  styleUrls: ['./material-search.component.css']
})
export class MaterialSearchComponent {
  displayedColumns = ['ERPNumber', 'state', 'descriptor', 'shortFormatDescription','purchaseOrderDescription','insertedAt'];
  dataSource = ELEMENT_DATA;
}


