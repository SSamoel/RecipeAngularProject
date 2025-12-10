import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing-module';
import { RecipesList } from './recipes-list/recipes-list';
import { RecipeItem } from './recipe-item/recipe-item';
import { RecipeDetails } from './recipe-details/recipe-details';
import { RecipeEdit } from './recipe-edit/recipe-edit';




@NgModule({
  declarations: [
    RecipesList,
    RecipeItem,
    RecipeDetails,
    RecipeEdit
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
