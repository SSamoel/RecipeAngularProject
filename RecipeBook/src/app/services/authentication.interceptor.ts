import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { Auth } from '../auth/auth';
import { User } from '../user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: Auth) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.user.pipe(
      take(1),
      exhaustMap((user: User | null) => {
        if (!user || !user.token) {
          // لو مفيش مستخدم، رجّع الطلب الأصلي زي ما هو
          return next.handle(req);
        }

        // لو فيه مستخدم، ضيف التوكن في البارامز
        const modifiedRequest = req.clone({
          params: new HttpParams().set('auth', user.token)
        });

        return next.handle(modifiedRequest);
      })
    );
  }
}
