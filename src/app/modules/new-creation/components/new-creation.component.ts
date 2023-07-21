import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'mdm-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css'],
  
})
export class NewCreationComponent  {

//   ERPNumber: string ='';
//   descriptor: string='';
//   specification: string='';
//   state: string='';
//   createdAt: string='';

 

//   constructor(
//     private data: DataService
//   ) { }
//   ngOnInit(): void {
//     this.getAllMaterials();
//   }
 

//   getAllMaterials() {

//     // this.data.getAllMaterials().subscribe(res => {

//     //   this.materialsList = res.map((e: any) => {
//     //     const data = e.payload.doc.data();
//     //     data.ERPNumber = e.payload.doc.ERPNumber;
//     //     return data;
//     //   })

//     // }, err => {
//     //   alert('Error while fetching material data');
//     // })

//   }

//   resetForm() {
//     this.ERPNumber= '',
//     this.descriptor= '',
//     this.specification= '',
//     this.state='',
//     this.createdAt= ''
//   }

//   addMaterial() {
//     if (this.ERPNumber == ''||this.descriptor == ''  || this.specification == '') {
//       // alert('Fill all input fields');
//       // return;
//     }

//     this.materialObj.ERPNumber = this.ERPNumber;
//     this.materialObj.specification = this.specification;
//     this.materialObj.descriptor = this.descriptor;

//     this.data.addMaterial(this.materialObj);
//     this.resetForm();

//   }

//   updateMaterial() {

//   }

//   deleteMaterial(material: NewMaterial) {
//     if (window.confirm('Are you sure you want to delete ' + material.ERPNumber + ' ' + material.descriptor + ' ?')) {
//       this.data.deleteMaterial(material);
//     }
//   }
// };
  // newMaterialForm = this.formBuilder.group({
  //   ERPNumber: [''],
  //   descriptor: [''],
  //   specifications: [''],
  // });
 
//   submitForm() {
//     console.log('Form data is ', this.newMaterialForm.value);

//     this.httpClient
//       .post(
//         'https://master-data-manager-mdm-default-rtdb.firebaseio.com/',
//         this.newMaterialForm.value
//       )
//       .subscribe(
//         (response: any) => {
//           console.log('response', response);
//           this.newMaterialForm.reset();
//         },
//         (error: any) => {
//           console.log(error);
//         })
// }



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
  }