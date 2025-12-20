import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing-module';
import { RouterModule } from '@angular/router';
import { UsersList } from './components/users-list/users-list';
import { AddUser } from './components/add-user/add-user';
import { EditUser } from './components/edit-user/edit-user';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersList,
    AddUser,
    EditUser
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
