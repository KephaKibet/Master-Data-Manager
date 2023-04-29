import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NewMaterial } from '../model/new-material';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }

  // add new material
  addMaterial(newMaterial : NewMaterial) {
    newMaterial.id = this.afs.createId();
    return this.afs.collection('/Materials').add(newMaterial);
  }

  // get all material
  getAllMaterials() {
    return this.afs.collection('/Materials').snapshotChanges();
  }

  // delete material
  deleteMaterial(newMaterial : NewMaterial) {
     this.afs.doc('/Materials/'+newMaterial.id).delete();
  }

  // update material
  updateStudent(newMaterial : NewMaterial) {
    this.deleteMaterial(newMaterial);
    this.addMaterial(newMaterial);
  }
    
}