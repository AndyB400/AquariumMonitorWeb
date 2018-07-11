import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Aquarium } from '../../models/aquarium';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// we can now access environment.apiUrl
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AquariumService {
  private aquariumsUrl = API_URL + 'aqua'; 

  constructor( private http: HttpClient) { }

  getAquariums(): Observable<Aquarium[]> {
    return this.http.get<Aquarium[]>(this.aquariumsUrl);
  }

  getAquarium(id: number): Observable<Aquarium> {
    const url = `${this.aquariumsUrl}/${id}`;
    return this.http.get<Aquarium>(url).pipe(
      tap(_ => this.log(`fetched aquarium id=${id}`)),
      catchError(this.handleError<Aquarium>(`getAquarium id=${id}`))
    );
  }

    /* GET aquariums whose name contains search term */
    searchAquariums(term: string): Observable<Aquarium[]> {
      if (!term.trim()) {
        // if not search term, return empty aquarium array.
        return of([]);
      }
      return this.http.get<Aquarium[]>(`${this.aquariumsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found aquariums matching "${term}"`)),
        catchError(this.handleError<Aquarium[]>('searchAquariums', []))
      );
    }
   
    //////// Save methods //////////
   
    /** POST: add a new aquarium to the server */
    addAquarium (aquarium: Aquarium): Observable<Aquarium> {
      return this.http.post<Aquarium>(this.aquariumsUrl, aquarium, httpOptions).pipe(
        tap((aquarium: Aquarium) => this.log(`added aquarium w/ id=${aquarium.id}`)),
        catchError(this.handleError<Aquarium>('addAquarium'))
      );
    }
   
    /** DELETE: delete the aquarium from the server */
    deleteAquarium (aquarium: Aquarium | number): Observable<Aquarium> {
      const id = typeof aquarium === 'number' ? aquarium : aquarium.id;
      const url = `${this.aquariumsUrl}/${id}`;
   
      return this.http.delete<Aquarium>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted aquarium id=${id}`)),
        catchError(this.handleError<Aquarium>('deleteAquarium'))
      );
    }
   
    /** PUT: update the aquarium on the server */
    updateAquarium (aquarium: Aquarium): Observable<any> {
      return this.http.put(this.aquariumsUrl, aquarium, httpOptions).pipe(
        tap(_ => this.log(`updated aquarium id=${aquarium.id}`)),
        catchError(this.handleError<any>('updateAquarium'))
      );
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a AquariumService message with the MessageService */
  private log(message: string) {
    console.log('AquariumService: ' + message);
  }
}


