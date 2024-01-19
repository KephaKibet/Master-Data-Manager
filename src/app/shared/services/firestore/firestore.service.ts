import { Injectable } from '@angular/core';
import { Observable, take, Subject } from 'rxjs';
import { authConfig, databaseConfig, storageConfig } from '../../config/firebase.config';
import { FirebaseCollectionTypes } from '../../interfaces/firebase.interface';

/**
 * A service for crud operations for the real-time database
 * the term 'collection' is used here to refer to nodes or paths in the real-time database
 *
 * @export
 * @class FirestoreService
 */
@Injectable({
  providedIn: 'root'
})


export class FirestoreService {
  database = databaseConfig;
  storage = storageConfig;
  constructor(
    // private fileService: FileService,
  ) { }

  /**
   * Checks whether an item exists in the real-time database
   *
   * @param {string} id
   * @param {string} collection
   * @return {*}  {Observable<boolean>}
   * @memberof FirestoreService
   */
  checkIfExists(id: string, collection: FirebaseCollectionTypes): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const dbRef = this.database.ref(collection + '/' + id);

      dbRef.once('value', (snapshot) => {
        const exists = snapshot.exists(); // Check if the node exists
        observer.next(exists);
        observer.complete();
      }, (error) => {
        console.error('Error checking node existence:', error);
        observer.error(error);
      });
    });
  }

  /**
   * Adds a new record to the real-time database
   * @param id
   * @param collection
   * @param data
   * @returns
   */
  addRecord(id: string, collection: FirebaseCollectionTypes, item: any): Promise<boolean> {
    // return this.database.ref(path).set(data);
    return new Promise<boolean>((resolve, reject) => {
      this.checkIfExists(id, collection).pipe(take(1)).subscribe({
        next: (data) => {
          if (data) throw new Error("A record with a similar id already exists in the database");

          // const user = authConfig.currentUser;
          const itemCopy: any = item;
          itemCopy.deleted = false;
          itemCopy.id = id as string;
          // itemCopy.uniqueId = uuid();
          itemCopy.createdAt = new Date().toISOString();
          // if (user) {
          //   itemCopy.createdBy = user.email;
          // } else {
          //   // throw new Error("User Must be logged In");
          // }
          this.database.ref(`${collection}/${id}`).set(itemCopy);
          resolve(true);
        },
        error: (err) => {
        },
      });
    })
  }

  /**
   * Gets all records from a 'collection' in realtime DB
   *
   * @param {FirebaseCollectionTypes} collection
   * @return {*}  {Observable<any>}
   * @memberof FirestoreService
   */
  getAllRecords(collection: FirebaseCollectionTypes, includeDeleted?: 'includeDeletedRecords'): Observable<any[]> {
    return new Observable<any[]>((subscriber) => {
      this.database.ref(collection).on('value', (snapshot) => {
        let records: any[] = [];
        if (includeDeleted) {
          snapshot.forEach((childSnapshot) => {
            const record = childSnapshot.val();

            // if (record.imageURLS) {
            //   this.getSignedURLs(record.imageUrls)
            // }
            records.push(record);
          });
        } else {
          snapshot.forEach((childSnapshot) => {
            const record = childSnapshot.val();
            if (record.deleted === false) {
              records.push(record);
            }
          });
        }
        subscriber.next(records)
      });
    })
  }

  /**
   * Gets a record from a 'collection' by its id
   *
   * @param {FirebaseCollectionTypes} collection
   * @param {string} id
   * @return {*}  {Observable<any>}
   * @memberof FirestoreService
   */
  getRecordById(collection: FirebaseCollectionTypes, id: string): Observable<any> {
    return new Observable<any>((subscriber) => {
      this.database.ref(`${collection}/${id}`).on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data.deleted) {

          subscriber.next(data);
        } else {
          subscriber.next(null);
        }
      });
    })
  }


  /**
   * Gets a list of records in realtime database based on a specified key
   *
   * @param {string} key
   * @param {*} value
   * @param {FirebaseCollectionTypes} collection
   * @return {*}
   * @memberof FirestoreService
   */
  getRecordsByKey(key: string, value: any, collection: FirebaseCollectionTypes) {
    return new Observable<any>((subscriber) => {
      let records: any[] = [];
      const query = this.database.ref(collection).orderByChild(key).equalTo(value);
      query.on('value', (snapshot) => {

        snapshot.forEach((childSnapshot) => {
          const record = childSnapshot.val();

          if (record['deleted'] === false) {
            records.push(record);
          }
        });
        subscriber.next(records);
      });
    })
  }

  /**
    * Gets a record where one of its fields is an array that contains the specified item to check

   *
   * @param {string} itemToCheck
   * @param {string} field
   * @param {FirebaseCollectionTypes} collection
   * @return {*}  {Observable<any[]>}
   * @memberof FirestoreService
   */
  getItemInArray(itemToCheck: string, field: string, collection: string, includeDeleted?: 'includeDeleted'): Observable<any[]> {
    return new Observable<any[]>((subscriber) => {
      this.database.ref(collection).once('value')
        .then((snapshot) => {
          let records: any[] = [];
          snapshot.forEach((childSnapshot) => {
            const record = childSnapshot.val();
            if (includeDeleted) {
              if (record[field].includes(itemToCheck)) {
                records.push(record);
              }
            } else {
              if (record[field].includes(itemToCheck) && !record.deleted) {
                records.push(record);
              }
            }
          });
          subscriber.next(records);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    });
  }


  /**
   * Updates a record by its id in the realtime database
   *
   * @param {string} id
   * @param {FirebaseCollectionTypes} collection
   * @param {*} item
   * @return {*}  {Promise<boolean>}
   * @memberof FirestoreService
   */
  updateRecord(id: string, collection: FirebaseCollectionTypes, item: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const user = authConfig.currentUser;
      const itemCopy: any = item;
      itemCopy.updatedAt = new Date().toISOString();
      if (user) {
        itemCopy.updatedBy = user.email;
      }

      this.database.ref(`${collection}/${id}`).update(itemCopy);
      resolve(true);
    })
  }

  /**
   * Deletes a record temporarily or permanently from the database
   *
   * @param {string} id
   * @param {string} collection
   * @param {'permanentDelete'} [permanentDelete] - delete the record permanently
   * @return {*}
   * @memberof FirestoreService
   */
  deleteRecord(id: string, collection: FirebaseCollectionTypes, permanentDelete?: 'permanentDelete') {
    return new Promise<boolean>((resolve, reject) => {
      const user = authConfig.currentUser;
      if (!user) throw new Error("Access denied due to insufficient permissions");


      // For permanent delete, all the items are deleted including their images
      if (permanentDelete) {
        this.getRecordById(collection, id).pipe(take(1)).subscribe({
          next: (data) => {
            this.database.ref(`${collection}/${id}`).remove();
            this.deleteImageURLs(data.imageURLS);
          },
          error: (err) => {
          },
        });
      } else {
        const payload = {
          deleted: true,
          deletedBy: user.email,
          deletedAt: Date.now(),
        }
        this.database.ref(`${collection}/${id}`).update(payload);
      }
      resolve(true);
    })
  }

  /**
   * Deletes an entire collection and all files associated with it
   *

   * @param collection
   */
  emptyCollection(collection: FirebaseCollectionTypes) {
    const urls: string[] = [];
    this.getAllRecords(collection).pipe(take(1)).subscribe({
      next: (records) => {
        records.forEach((record) => {
          const fileURLS = ['imageURLS', 'fileURLS']
          fileURLS.forEach((file) => {
            if (record[file]) {
              urls.concat(record[file]);
            }
          })
        });
        this.deleteImageURLs(urls);
        this.database.ref(collection).remove();
      },
      error: (err) => {
      },
    });
  }

  /**
   * Gets signed file urls from firebase storage
   *
   * @param {string[]} urls
   * @memberof FirestoreService
   */
  getSignedURLs(urls: string[]) {

    // const promises: any[] = [];

    // urls.forEach((url) => {
    //   // fileRef = this.storage.refFromURL()
    //   const promise = this.fileService.getFileURL(url, 'url');
    // });

    // Promise.all(promises).then((res) => {
    //   console.log(res);

    // })
  }

  /**
   * Deletes images from the database by image URL
   * @private
   * @param {string[]} urls
   * @memberof FirestoreService
   */
  private deleteImageURLs(urls: string[]) {
    urls.map((url) => {
      return new Promise<boolean>((resolve, reject) => {
        // Create a reference to the file using the URL
        var fileRef = this.storage.refFromURL(url);
        // Delete the file
        fileRef.delete();
      });
    });
  }


  // on destroy
  destroy$ = new Subject();
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}