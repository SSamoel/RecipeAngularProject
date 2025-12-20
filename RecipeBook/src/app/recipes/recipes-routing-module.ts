import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesList } from './components/recipes-list/recipes-list';
import { RecipeEdit } from './recipe-edit/recipe-edit';
import { RecipeDetails } from './components/recipe-details/recipe-details';

const routes: Routes = [
  { path: '', component: RecipesList },
  { path: 'new', component: RecipeEdit },
  { path: ':id', component: RecipeDetails },
  { path: ':id/edit', component: RecipeEdit }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }
