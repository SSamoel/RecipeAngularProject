import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UsersServices } from './users-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
  users: User[] = []

  constructor(private userServices: UsersServices, private router: Router) { }

  ngOnInit() {
    this.userServices.getAllUsers().subscribe({
      next: (res) => this.users = res.users,
      error: (err) => console.error(err)
    })
  }


  editUser(id: number) {
    this.router.navigate(['/dashboard/editUser', id]);
  }

  deleteUser(id: number) {
    this.userServices.deleteUser(id).subscribe({
      next: (res) => {
        console.log('Deleted:', res);
        this.users = this.users.filter(res => res.id !== id);

      }
    })
  }
}
