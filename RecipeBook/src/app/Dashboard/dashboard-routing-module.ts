import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Recipes } from './dashboard/recipes/recipes';
import { Users } from './dashboard/users/users';
import { AddNewRecipe } from './dashboard/recipes/add-new-recipe/add-new-recipe';
import { EditRecipe } from './dashboard/recipes/edit-recipe/edit-recipe';

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
  {path:'editRecipe/:id', component : EditRecipe}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
