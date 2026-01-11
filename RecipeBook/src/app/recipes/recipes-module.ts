import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing-module';
import { RecipeDetails } from './components/recipe-details/recipe-details';
import { RecipesList } from './components/recipes-list/recipes-list';
import { CoreModule } from '../core/core-module';




@NgModule({
  declarations: [
    RecipesList,
    RecipeDetails,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    CoreModule
  ]
})
export class RecipesModule { }
