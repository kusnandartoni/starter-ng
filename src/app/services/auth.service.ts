import { Injectable, Inject } from '@angular/core';
import { Login } from '../models/login';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }


  login(data: Login): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, data, this.httpOptions).pipe(
      tap(_ => console.log('data fetched')),
      catchError(this.handleError<Login>('login'))
    );
  }

  isVerified(): boolean {
    let result = false;

    const token = this.storage.get('token');
    if (token) {
      result = true;
    }

    return result;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = ` ${error.error.msg} [${error.error.code}]`;
      }
      alert(`${operation} failed: ${errorMessage}`);
      return of(result as T);
    };
  }
}
