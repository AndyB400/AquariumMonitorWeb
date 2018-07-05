import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Aquarium } from '../models/aquarium';
import { AQUARIUMS } from '../mock-aquariums';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AquariumService {
  private aquariumsUrl = 'api/aquariums'; 
  

  constructor( private http: HttpClient) { }

  getAquariums(): Observable<Aquarium[]> {
    return this.http.get<Aquarium[]>(this.aquariumsUrl);
  }

  getAquariu(id: number): Observable<Aquarium> {
    const url = `${this.aquariumsUrl}/${id}`;
    return this.http.get<Aquarium>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Aquarium>(`getHero id=${id}`))
    );
  }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Aquarium[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Aquarium[]>(`${this.aquariumsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Aquarium[]>('searchHeroes', []))
      );
    }
   
    //////// Save methods //////////
   
    /** POST: add a new hero to the server */
    addHero (hero: Aquarium): Observable<Aquarium> {
      return this.http.post<Aquarium>(this.aquariumsUrl, hero, httpOptions).pipe(
        tap((hero: Aquarium) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Aquarium>('addHero'))
      );
    }
   
    /** DELETE: delete the hero from the server */
    deleteHero (hero: Aquarium | number): Observable<Aquarium> {
      const id = typeof hero === 'number' ? hero : hero.id;
      const url = `${this.aquariumsUrl}/${id}`;
   
      return this.http.delete<Aquarium>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Aquarium>('deleteHero'))
      );
    }
   
    /** PUT: update the hero on the server */
    updateHero (hero: Aquarium): Observable<any> {
      return this.http.put(this.aquariumsUrl, hero, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
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
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('AquariumService: ' + message);
  }
}


