import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take,pipe } from 'rxjs';
import { MaterialInterface } from '../../interfaces/material.interface';
import { HttpService } from '../http/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor(
    private httpservice: HttpService,
  ) { }
  // dataSource: any;
  // searchTerm = new BehaviorSubject<string | null>(null);

  // searchMaterial(searchTerm: string): Observable<MaterialInterface[]> {
  //   return new Observable<MaterialInterface[]>((subscriber)=>{
  //   this.httpservice.get("materials").pipe(take(1)).subscribe(data => {
  //         const materials = data['Search'] as MaterialInterface[]; 
  //     // Assuming the response has a 'Search' property containing the movies
  //         subscriber.next(materials)
  //       });
  
  //     })
  
    // searchMovie(searchTerm:string): Observable<SearchedMovieInterface[]> {
    //   const url = 'https://www.omdbapi.com';
    //   const params = {
    //     s: searchTerm,
    //     apikey: 'f91ddec1'
    //   };

    // return new Observable<MaterialInterface[]>((subscriber)=>{
    //   this.httpClient.get(url, { params }).pipe(take(1)).subscribe((response:any) => {
    //     const movies = response['Search'] as MaterialInterface[]; // Assuming the response has a 'Search' property containing the movies
    //     subscriber.next(materials)
    //   });

    // })
    // }
    
  }

  


