import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../../services/authentication';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: Authentication) { }

  onSubmit() {
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => {
        this.router.navigate(['/recipesdashboard']);
      }
    })
  }
}

