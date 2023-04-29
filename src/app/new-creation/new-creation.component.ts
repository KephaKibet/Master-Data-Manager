import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'mdm-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent {
  httpClient: any;

  constructor(
    private formBuilder: FormBuilder,
    // private httpClient: HttpClient
  )
  { }

  newMaterialForm = this.formBuilder.group({
    ERPNumber: [''],
    descriptor: [''],
    specifications: [''],
  });
 
  submitForm() {
    console.log('Form data is ', this.newMaterialForm.value);

    this.httpClient
      .post(
        'https://master-data-manager-mdm-default-rtdb.firebaseio.com/',
        this.newMaterialForm.value
      )
      .subscribe(
        (response: any) => {
          console.log('response', response);
          this.newMaterialForm.reset();
        },
        (error: any) => {
          console.log(error);
        })
}
}


// 

  // onNewMaterialCreation() {
  //   console.log('newMaterialForm', this.newMaterialForm.value);

  //   this.httpClient
  //     .post(
  //       'https://master-data-manager-mdm-default-rtdb.firebaseio.com/',
  //       this.newMaterialForm.value
  //     )
  //     .subscribe(
  //       (response) => {
  //         console.log('response', response);
  //         this.newMaterialForm.reset();
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }