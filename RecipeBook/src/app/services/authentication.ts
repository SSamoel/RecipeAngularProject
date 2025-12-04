import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthResponseData } from '../auth.response';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  constructor(private http: HttpClient) { }

  user = new BehaviorSubject<User | null>(null);

  handleAuthentication(email: string, id: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  signup(email: string, password: string) {
    return this.http.post<IAuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBe_sIqeIJc7ZXmIEiiRfqq2hvfxhw7GnE',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }


  login(email: string, password: string) {
    return this.http.post<IAuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBe_sIqeIJc7ZXmIEiiRfqq2hvfxhw7GnE',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData => {
        // هنا بنحسب مدة الصلاحية
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }


  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "unkowun error";
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = "email already exists";
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "email not found";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "invalid password"
        break;

    }
    return throwError(() => errorMessage)
  }

  logout() {
    this.user.next(null);
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

}
