import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Recipes } from './dashboard/recipes/recipes';
import { Users } from './dashboard/users/users';
import { AddNewRecipe } from './dashboard/recipes/add-new-recipe/add-new-recipe';
import { EditRecipe } from './dashboard/recipes/edit-recipe/edit-recipe';
import { AddUser } from './dashboard/users/add-user/add-user';
import { EditUser } from './dashboard/users/edit-user/edit-user';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'recipes', component: Recipes },
      { path: 'users', component: Users },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {path:'addNewRecipe' , component: AddNewRecipe},
  {path:'editRecipe/:id', component : EditRecipe},
  {path:'addUser' , component : AddUser},
  {path:'editUser/:id' , component : EditUser}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
