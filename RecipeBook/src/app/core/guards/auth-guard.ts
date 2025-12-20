import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Authentication } from '../services/authentication-service';

@Injectable({ providedIn: 'root' })

export class authGuard implements CanActivate {

  constructor(
    private authService: Authentication,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

};
