import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from "../services/token.service";
import { catchError, switchMap, tap } from "rxjs/operators";
import {BehaviorSubject, throwError} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'https://damp-spire-59848.herokuapp.com/api/auth';
  private apiUrl = 'http://127.0.0.1:5000/users';
  private user = new BehaviorSubject<User | null>(null)

  user$ = this.user.asObservable()

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  login(email: string, password: string) {
    return this.httpClient.post<Auth>(`${this.apiUrl}/login`, {
      email,
      password,
    }).pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    )
  }

  profile() {
    return this.httpClient.get<User>(`${this.apiUrl}/profile`).pipe(tap(user => this.user.next(user)));
  }

  loginAndGetProfile (email:string, password:string) {
    return this.login(email,password).pipe(switchMap(() => this.profile()))
  }

  logout() {
    this.tokenService.removeToken()
  }
}
