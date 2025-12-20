import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard-layout/dashboard';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'users', loadChildren: () => import('../Dashboard/users/users-module').then(m => m.UsersModule) },
      { path: 'recipes-dashboard', loadChildren: () => import('../Dashboard/recipes-dashboard/recipes-dashboard-module').then(m => m.RecipesDashboardModule) },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
