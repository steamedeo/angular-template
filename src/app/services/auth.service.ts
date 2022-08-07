import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({email, password}: any): Observable<any> {
    if (email === 'admin' && password === 'admin') {
      return of(true);
    }
    return throwError(() => Error(('Credenziali sbagliate!')));
  }
}
