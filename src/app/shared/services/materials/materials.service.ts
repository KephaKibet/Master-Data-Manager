import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private db: AngularFireDatabase) { }

// get data from firebase RTD
  getData(): Observable<any[]> {
    return this.db.list('master-data-manager-38a47-default-rtdb.firebaseio.com').valueChanges();
  }
}
