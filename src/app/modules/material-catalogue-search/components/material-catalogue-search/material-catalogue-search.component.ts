import { Component } from '@angular/core';
import { ELEMENT_DATA } from 'src/app/tableData';

@Component({
  selector: 'app-material-catalogue-search',
  templateUrl: './material-catalogue-search.component.html',
  styleUrls: ['./material-catalogue-search.component.css']
})
export class MaterialCatalogueSearchComponent {
  displayedColumns = ['ERPNumber', 'state', 'descriptor', 'shortFormatDescription','purchaseOrderDescription','insertedAt'];
  dataSource = ELEMENT_DATA;

}
