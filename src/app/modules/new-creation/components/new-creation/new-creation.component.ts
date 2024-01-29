import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http/httpservice.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent {
  newMaterialForm = new FormGroup({
    ERPNumber: new FormControl<string | null>(null,Validators.required),
    state: new FormControl<string | null>(null,Validators.required),
    descriptor: new FormControl<string | null>(null,Validators.required),
    shortFormatDescription: new FormControl<string | null>(null,Validators.required),
    purchaseOrderDescription: new FormControl<string | null>(null,Validators.required),
  });

  constructor(
    private httpservice: HttpService
  ) { }

  submitNewMaterial() {
    if(this.newMaterialForm.valid)
    {
      this.httpservice.post(v4(), "materials", {
      ...this.newMaterialForm.value
    }).subscribe();
      console.log(this.newMaterialForm.value);
    }
  }
}



