import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersServices } from '../../services/users-services';
import { User } from '../../../../core/models/user.model';



@Component({
  standalone: false,
  selector: 'app-edit-user',
  templateUrl: './edit-user.html',
  styleUrls: ['./edit-user.css']
})
export class EditUser implements OnInit {

  userForm!: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userServices: UsersServices,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: ['']
    });

    this.loadUser();
  }

  loadUser(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.userId = Number(idParam);;
      this.userServices.getSingleUser(this.userId).subscribe(user => {
        console.log('USER FROM API:', user);
        this.userForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age
        });
      });
    }
  }

  userFormSubmit(): void {
    const userData = this.userForm.value;
    this.userServices.updateUser(this.userId, userData).subscribe({
      next: (res: User) => {
        console.log('Updated user:', res);
        this.router.navigate(['/dashboard/users']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Update failed', err);
      }
    });
  }
}
