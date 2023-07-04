import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = "https://jsonplaceholder.typicode.com";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiURL + '/posts/')
      .pipe(
        catchError((error: any) => this.errorHandler(error))
      );
  }

  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError((error: any) => this.errorHandler(error))
      );
  }

  find(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.apiURL + '/posts/' + id)
      .pipe(
        catchError((error: any) => this.errorHandler(error))
      );
  }

  update(id: number, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError((error: any) => this.errorHandler(error))
      );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.apiURL + '/posts/' + id, this.httpOptions)
      .pipe(
        catchError((error: any) => this.errorHandler(error))
      );
  }

  errorHandler(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
