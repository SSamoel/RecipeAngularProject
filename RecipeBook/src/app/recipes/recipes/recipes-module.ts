import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing-module';
import { Recipes } from '../recipes';
import { RecipeList } from '../recipe-list/recipe-list';
import { RecipeDetails } from '../recipe-details/recipe-details';
import { RecipeItem } from '../recipe-list/recipe-item/recipe-item';
import { RecipeStart } from '../recipe-start/recipe-start';
import { RecipeEdit } from '../recipe-edit/recipe-edit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Recipes,
    RecipeList,
    RecipeDetails,
    RecipeItem,
    RecipeStart,
    RecipeEdit
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
     Recipes,
    RecipeList,
    RecipeDetails,
    RecipeItem,
    RecipeStart,
    RecipeEdit
  ]
})
export class RecipesModule { }
