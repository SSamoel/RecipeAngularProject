import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { Authentication } from "../services/authentication-service";

@Injectable()
export class authInterceptorService implements HttpInterceptor{

  constructor(private authService: Authentication) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();
    if (!token) {
      return next.handle(req);
    }
    const modifiedRquest = req.clone({headers: req.headers.append("token",token)})
    return next.handle(modifiedRquest);
  }
}
