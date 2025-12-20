import { Component } from '@angular/core';
import { UsersServices } from '../../services/users-services';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
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
