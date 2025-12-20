import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesList } from './components/recipes-list/recipes-list';
import { RecipeDetails } from './components/recipe-details/recipe-details';

const routes: Routes = [
  { path: '', component: RecipesList },
  { path: ':id', component: RecipeDetails },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }
