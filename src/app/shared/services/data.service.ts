// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';


// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor(private fdb : AngularFirestore, private fireStorage : AngularFireStorage) { }

//   // add new material
//   addMaterial(newMaterial : NewMaterial) {
//     newMaterial.ERPNumber = this.fdb.createId();
//     return this.fdb.collection('/Materials').add(newMaterial);
//   }

//   // get all material
//   getAllMaterials() {
//     return this.fdb.collection('/Materials').snapshotChanges();
//   }

//   // delete material
//   deleteMaterial(newMaterial : NewMaterial) {
//      this.fdb.doc('/Materials'+newMaterial.ERPNumber).delete();
//   }

//   // update material
//   updateStudent(newMaterial : NewMaterial) {
//     this.deleteMaterial(newMaterial);
//     this.addMaterial(newMaterial);
//   }
    
