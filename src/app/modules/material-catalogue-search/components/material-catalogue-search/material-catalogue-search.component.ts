import { Component } from '@angular/core';
import { MaterialInterface } from 'src/app/shared/interfaces/material.interface';
import { MatDialog } from  '@angular/material/dialog';



@Component({
  selector: 'app-material-catalogue-search',
  templateUrl: './material-catalogue-search.component.html',
  styleUrls: ['./material-catalogue-search.component.css']
})
export class MaterialCatalogueSearchComponent {
  dataSource?: any;
  displayedColumns = ['ERPNumber', 'state', 'descriptor', 'shortFormatDescription', 'purchaseOrderDescription', 'insertedAt'];
  }
  // searchTerm = new BehaviorSubject<string | null>(null);
  // from movie service
  // searchMovie(searchTerm:string): Observable<SearchedMovieInterface[]> {
  //   const url = 'https://www.omdbapi.com';
  //   const params = {
  //     s: searchTerm,
  //     apikey: 'f91ddec1'
  //   };

  // return new Observable<SearchedMovieInterface[]>((subscriber)=>{
  //   this.httpClient.get(url, { params }).pipe(take(1)).subscribe((response:any) => {
  //     const movies = response['Search'] as SearchedMovieInterface[]; // Assuming the response has a 'Search' property containing the movies
  //     subscriber.next(movies)
  //   });

  // })
  // }


//   search(event:any){
//     const searchTerm = event.value;
//     this.searchMaterials(searchTerm)
//     console.log(searchTerm);
//   }






// }

