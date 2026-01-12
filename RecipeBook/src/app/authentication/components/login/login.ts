import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../../../core/services/authentication-service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: Authentication,
    private toastr: ToastrService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please fill all fields', 'Validation Error');
      return;
    }
    const { username, password } = this.loginForm.value;
    this.authService.login({ username, password }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.toastr.success('Login successful');
        this.router.navigate(['/dashboard/']);
      },
      error: (err) => {
        if (err.status === 401 || err.status === 400) {
          this.toastr.error('Username or password is incorrect', 'Login Failed');
        } else {
          this.toastr.error('Something went wrong', 'Error');
        }
      }
    })
  }
}

