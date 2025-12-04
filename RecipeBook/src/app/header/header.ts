import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorage } from '../services/data-storage';
import { Authentication } from '../services/authentication';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  userSubscription!: Subscription;
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorage, private authenticationService: Authentication, private router: Router) { }
  ngOnInit(): void {
    this.userSubscription = this.authenticationService.user.subscribe((user) => {
      this.isAuthenticated = !!user && !!user.token;
    })
  } 



  onLogout() {
    this.isAuthenticated = false;
    this.authenticationService.logout();
    this.router.navigate(['/auth'])
  }

}
