import { RecipesModule } from './recipes/recipes/recipes-module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { Recipe } from './recipes/recipe.model';
import { RecipeDetails } from './recipes/recipe-details/recipe-details';
import { RecipeStart } from './recipes/recipe-start/recipe-start';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';
import { Auth } from './auth/auth';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path:'recipes',
    loadChildren:()=>import('./recipes/recipes/recipes-module').then(m=>m.RecipesModule)
  },
  {
    path:'shopping-list',
    loadChildren:()=>import('./shopping-list/shopping-list/shopping-list-module').then(m=>m.ShoppingListModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth/auth-module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
