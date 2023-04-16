import {  Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'mdm-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent implements OnInit {

  // newMaterialForm: FormGroup = new FormGroup(
  //   {
  //     ERPNumbe: new FormControl('', [Validators.required]),
  //     descriptor: new FormControl('', [Validators.required, Validators.email]),
  //     specificatiions: new FormControl('', [
  //       Validators.required,
  //     ]),
  //   }
  // );
  ngOnInit(): void { }

  onNewMaterialCreation(newMaterialForm: any) {
    console.log(newMaterialForm.value);
  
  }
}

//   constructor(private HttpClient:HttpClient) { 
   
//   }
//   ngOnInit(): void {
    
//   }
  
//   onNewMaterialCreation(newMaterialForm: NgForm) {
//     console.log(newMaterialForm.value);

//     this.HttpClient.post(
//       'https://master-data-manager-mdm-default-rtdb.firebaseio.com/'.this.newMaterialForm.value
    
//   }

// }



// constructor(
  //   private httpClient: HttpClient,
  // ) {}

  // ngOnInit(): void {}

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