import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesDashboardList } from './components/recipes-dashboard-list/recipes-dashboard-list';

const routes: Routes = [
  { path: '', component: RecipesDashboardList }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesDashboardRoutingModule { }
