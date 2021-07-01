import { Injectable } from '@angular/core';
import { Legend } from './legend';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LegendService {
  private legendsUrl = 'api/legends';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private messageService: MessageService) { }

 /** GET legends from the server */
 getLegends(): Observable<Legend[]> {
  return this.http.get<Legend[]>(this.legendsUrl)
    .pipe(
      tap(_ => this.log('fetched legends')),
      catchError(this.handleError<Legend[]>('getLegends', []))
    );
}

/** GET hero by id. Return `undefined` when id not found */
getLegendNo404<Data>(id: number): Observable<Legend> {
  const url = `${this.legendsUrl}/?id=${id}`;
  return this.http.get<Legend[]>(url)
    .pipe(
      map(legends => legends[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} legend id=${id}`);
      }),
      catchError(this.handleError<Legend>(`getLegend id=${id}`))
    );
}

 /** GET legend by id. */
getLegend(id: number): Observable<Legend> {
  const url = `${this.legendsUrl}/${id}`;
  return this.http.get<Legend>(url).pipe(
    tap(_ => this.log(`fetched legend id=${id}`)),
    catchError(this.handleError<Legend>(`getLegend id=${id}`))
  );
}

/* GET legends whose name contains search term */
searchLegends(term: string): Observable<Legend[]> {
  if (!term.trim()) {
    // if not search term, return empty legend array.
    return of([]);
  }
  return this.http.get<Legend[]>(`${this.legendsUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found legends matching "${term}"`) :
       this.log(`no legends matching "${term}"`)),
    catchError(this.handleError<Legend[]>('searchLegends', []))
  );
}

/** POST: add a new legend to the server */
addLegend(legend: Legend): Observable<Legend> {
  return this.http.post<Legend>(this.legendsUrl, legend, this.httpOptions).pipe(
    tap((newLegend: Legend) => this.log(`added legend w/ id=${newLegend.id}`)),
    catchError(this.handleError<Legend>('addLegend'))
  );
}

/** DELETE: delete the legend from the server */
deleteLegend(id: number): Observable<Legend> {
  const url = `${this.legendsUrl}/${id}`;

  return this.http.delete<Legend>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted legend id=${id}`)),
    catchError(this.handleError<Legend>('deleteLegend'))
  );
}

/** PUT: update the legend on the server */
updateLegend(legend: Legend): Observable<any> {
  return this.http.put(this.legendsUrl, legend, this.httpOptions).pipe(
    tap(_ => this.log(`updated legend id=${legend.id}`)),
    catchError(this.handleError<any>('updateLegend'))
  );
}
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** Log a LegendService message with the MessageService */
private log(message: string) {
  this.messageService.add(`LegendService: ${message}`);
}



}
