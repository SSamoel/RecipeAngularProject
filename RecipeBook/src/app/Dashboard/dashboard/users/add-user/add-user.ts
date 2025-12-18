import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../users-services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser implements OnInit {

  userForm!: FormGroup;

  constructor(private userService: UsersServices, private fb: FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    })
  }

  userFormSubmit() {
    if (this.userForm.invalid) return;
    const userFormData = this.userForm.value;
    this.userService.addUser(userFormData).subscribe({
      next: (res) => {
        console.log("User Added", res);
        this.router.navigate(['/dashboard/users']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
