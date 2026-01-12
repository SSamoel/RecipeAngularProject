import { Component } from '@angular/core';
import { UsersServices } from '../../services/users-services';
import { Router } from '@angular/router';
import { User } from '../../../../core/models/user.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
  users: User[] = [];
  totalUsers = 0;
  pageSize = 10;
  currentPage = 1;


  constructor(private userServices: UsersServices, private router: Router) { }

  ngOnInit() {
    this.loadUsers(this.pageSize , 0)
  }

  onMatPageChange(event : PageEvent){
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    const skip = (this.currentPage - 1 ) * this.pageSize;
    this.loadUsers(this.pageSize , skip);
  }

  loadUsers(limit:number , skip:number) {
    this.userServices.getAllUsers(limit,skip).subscribe((res) => {
      this.users = res.users ;
      this.totalUsers = res.total;
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
