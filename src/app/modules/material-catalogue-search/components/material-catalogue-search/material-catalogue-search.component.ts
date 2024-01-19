import { Component, OnInit } from '@angular/core';
import { MaterialInterface } from 'src/app/shared/interfaces/material.interface';
import { HttpService } from 'src/app/shared/services/http/httpservice.service';
import { MaterialService } from 'src/app/shared/services/materials/materials.service';
import { ELEMENT_DATA } from 'src/tableData';
import { v4 } from 'uuid';

@Component({
  selector: 'app-material-catalogue-search',
  templateUrl: './material-catalogue-search.component.html',
  styleUrls: ['./material-catalogue-search.component.css']
})
export class MaterialCatalogueSearchComponent implements OnInit {

  // data: any[] | undefined;

  displayedColumns = ['ERPNumber', 'state', 'descriptor', 'shortFormatDescription','purchaseOrderDescription','insertedAt'];
  dataSource = ELEMENT_DATA;

  constructor(
    private httpservice: HttpService,
    // private materialService: MaterialService
  ) {
    this.httpservice.get("categories").subscribe(data => {
    console.log(data);
    })
    this.httpservice.post(v4(),"categories", {name:"kepha", materials:"3m"}).subscribe()
 }
  ngOnInit(): void {
    // this.materialService.getData().subscribe((data) => {
    //   this.data = data 
    //   console.log(this.data);
    // });
  }

}
