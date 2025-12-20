import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesDashboardList } from './components/recipes-dashboard-list/recipes-dashboard-list';
import { AddNewRecipe } from './components/add-new-recipe/add-new-recipe';
import { EditRecipe } from './components/edit-recipe/edit-recipe';

const routes: Routes = [
  {
    path: '',
    component: RecipesDashboardList
  },
  {
    path: 'add',
    component: AddNewRecipe
  },
  {
    path: 'edit/:id',
    component: EditRecipe
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesDashboardRoutingModule { }
