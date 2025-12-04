import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Recipes } from '../recipes';
import { RecipeStart } from '../recipe-start/recipe-start';
import { RecipeEdit } from '../recipe-edit/recipe-edit';
import { RecipeDetails } from '../recipe-details/recipe-details';

const routes: Routes = [


    {path : '' , component : Recipes,
    children : [
      {
        path : '' , component : RecipeStart
      },
       {
        path : 'new' , component : RecipeEdit
      },
      {
        path : ':id' , component : RecipeDetails
      },

      {
        path : ':id/edit' , component : RecipeEdit
      }

    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
