import { Component } from '@angular/core';
import { Authentication } from '../../core/services/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(
    private authService : Authentication,
    private router : Router
  ){}

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  } 
}
