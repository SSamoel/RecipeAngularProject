import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersList } from './components/users-list/users-list';
import { AddUser } from './components/add-user/add-user';
import { EditUser } from './components/edit-user/edit-user';

const routes: Routes = [
    {
    path: '',
    component: UsersList
  },
  {
    path: 'add',
    component: AddUser
  },
  {
    path: 'edit/:id',
    component: EditUser
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
