import { Component } from '@angular/core';
import { UsersServices } from '../../services/users-services';
import { Router } from '@angular/router';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
  users: User[] = [];
  limit = 5;
  skip = 0;
  total = 0;

  constructor(private userServices: UsersServices, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userServices.getAllUsers(this.limit, this.skip).subscribe((data) => {
      this.users = [...this.users, ...data.users];
      this.total = data.total;
      this.skip += this.limit;
    })
  }
  editUser(id: number) {
    this.router.navigate(['/dashboard/users/edit', id]);
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
