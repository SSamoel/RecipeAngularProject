import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesDashboardRoutingModule } from './recipes-dashboard-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesDashboardList } from './components/recipes-dashboard-list/recipes-dashboard-list';
import { AddNewRecipe } from './components/add-new-recipe/add-new-recipe';
import { EditRecipe } from './components/edit-recipe/edit-recipe';
import { MatPaginator } from "@angular/material/paginator";


@NgModule({
  declarations: [
    RecipesDashboardList,
    AddNewRecipe,
    EditRecipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesDashboardRoutingModule,
    MatPaginator
  ]
})
export class RecipesDashboardModule { }
