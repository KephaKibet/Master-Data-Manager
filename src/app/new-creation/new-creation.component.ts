import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdm-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent {

  constructor(private formBuilder:FormBuilder){}

  newMaterialForm = this.formBuilder.group({
    ERPNumber:[''],
    descriptor:[''],
    specifications:[''],
  });
 
  submitForm(){
    console.log('Form data is ', this.newMaterialForm.value);
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