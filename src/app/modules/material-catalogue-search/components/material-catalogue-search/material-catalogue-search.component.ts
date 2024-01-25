import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/httpservice.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-material-catalogue-search',
  templateUrl: './material-catalogue-search.component.html',
  styleUrls: ['./material-catalogue-search.component.css']
})
export class MaterialCatalogueSearchComponent  {

  dataSource?: any;

  displayedColumns = ['ERPNumber', 'state', 'descriptor', 'shortFormatDescription', 'purchaseOrderDescription', 'insertedAt'];

  constructor(
    private httpservice: HttpService,)
  {
    this.httpservice.get("materials").subscribe(data => {
      this.dataSource = data;
      // console.log(data);
    })
    this.httpservice.post(v4(), "materials", {
      ERPNumber: 917210,
      State: "Active",
      descriptor: "WRENCH SET, ALLEN",
      shortFormatDescription: "WRENCH SET ALLN;FUH1473,BALL,1",
      purchaseOrderDescription: "WRENCH SET, ALLEN; REFERENCE NO: FUH1473, TYPE: BALL, SIZE RANGE: , SET QUANTITY: 12",
    }).subscribe()
  }

  
}

