import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { Sidebar } from './dashboard/sidebar/sidebar';
import { Recipes } from './dashboard/recipes/recipes';
import { Users } from './dashboard/users/users';
import { AddNewRecipe } from './dashboard/recipes/add-new-recipe/add-new-recipe';
import { EditRecipe } from './dashboard/recipes/edit-recipe/edit-recipe';
import { AddUser } from './dashboard/users/add-user/add-user';
import { EditUser } from './dashboard/users/edit-user/edit-user';


@NgModule({
  declarations: [
    Dashboard,
    Sidebar,
    Recipes,
    Users,
    AddNewRecipe,
    EditRecipe,
    AddUser,
    EditUser
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
