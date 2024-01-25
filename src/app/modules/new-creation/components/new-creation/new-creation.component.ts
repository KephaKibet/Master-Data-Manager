import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/httpservice.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent {
  constructor(
    private httpservice:HttpService
  ) {
  }

  submit() {
    this.httpservice.post(v4(), "materials", {
      ERPNumber: 917210,
      State: "Active",
      descriptor: "WRENCH SET, ALLEN",
      shortFormatDescription: "WRENCH SET ALLN;FUH1473,BALL,1",
      purchaseOrderDescription: "WRENCH SET, ALLEN; REFERENCE NO: FUH1473, TYPE: BALL, SIZE RANGE: , SET QUANTITY: 12",
    }).subscribe()
  }
}


