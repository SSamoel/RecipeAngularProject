import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  private apiUrl = environment.apiBaseUrl + 'auth/login';
  constructor(private http: HttpClient) { }

  login(data: { username: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, {
      ...data,
      expiresInMins: 30
    }).pipe(
      tap((res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('user', JSON.stringify(res));
      })
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
  logout() {
    localStorage.clear();
  }

}
