import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IAquarium } from '../../_models/aquarium';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AquariumService {
  private aquariumsUrl = API_URL + 'aquariums'; 

  constructor( private http: HttpClient) { }

  getAquariums(): Observable<IAquarium[]> {
    return this.http.get<IAquarium[]>(this.aquariumsUrl);
  }

  getAquarium(id: number): Observable<IAquarium> {
    const url = `${this.aquariumsUrl}/${id}`;
    
    return this.http.get<IAquarium>(url).pipe(
      tap(_ => this.log(`fetched Aquarium id=${id}`)),
      catchError(this.handleError<IAquarium>(`getAquarium id=${id}`))
    );
  }

    /* GET Aquariums whose name contains search term */
    searchAquariums(term: string): Observable<IAquarium[]> {
      if (!term.trim()) {
        // if not search term, return empty Aquarium array.
        return of([]);
      }
      return this.http.get<IAquarium[]>(`${this.aquariumsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found Aquariums matching "${term}"`)),
        catchError(this.handleError<IAquarium[]>('searchAquariums', []))
      );
    }
   
    //////// Save methods //////////
   
    /** POST: add a new aquarium to the server */
    addAquarium (aquarium: IAquarium): Observable<IAquarium> {
      return this.http.post<IAquarium>(this.aquariumsUrl, aquarium, httpOptions).pipe(
        tap((aquarium: IAquarium) => this.log(`added aquarium w/ id=${aquarium.id}`)),
        catchError(this.handleError<IAquarium>('addAquarium'))
      );
    }
   
    /** DELETE: delete the aquarium from the server */
    deleteAquarium (aquarium: IAquarium | number): Observable<IAquarium> {
      const id = typeof aquarium === 'number' ? aquarium : aquarium.id;
      const url = `${this.aquariumsUrl}/${id}`;
   
      return this.http.delete<IAquarium>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted aquarium id=${id}`)),
        catchError(this.handleError<IAquarium>('deleteAquarium'))
      );
    }
   
    /** PUT: update the aquarium on the server */
    updateAquarium (aquarium: IAquarium): Observable<any> {
      const id = typeof aquarium === 'number' ? aquarium : aquarium.id;
      const url = `${this.aquariumsUrl}/${id}`;

      return this.http.put(url, aquarium, httpOptions).pipe(
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


