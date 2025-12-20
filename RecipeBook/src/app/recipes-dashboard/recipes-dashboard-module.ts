import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesDashboardRoutingModule } from './recipes-dashboard-routing-module';
import { RecipesDashboardList } from './components/recipes-dashboard-list/recipes-dashboard-list';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewRecipe } from './components/add-new-recipe/add-new-recipe';
import { EditRecipe } from './components/edit-recipe/edit-recipe';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    RecipesDashboardList,
    AddNewRecipe,
    EditRecipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesDashboardRoutingModule
  ]
})
export class RecipesDashboardModule { }
