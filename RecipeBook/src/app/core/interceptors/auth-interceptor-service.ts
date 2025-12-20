import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";

@Injectable()
export class authInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return next.handle(req);
    }
    const modifiedRquest = req.clone({headers: req.headers.append("token",token)})
    return next.handle(modifiedRquest);
  }
}
