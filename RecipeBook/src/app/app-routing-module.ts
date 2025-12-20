import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Dashboard/dashboard-module')
        .then(m => m.DashboardModule)
  },
  {
    path: 'recipesdashboard',
    loadChildren: () =>
      import('./recipes-dashboard/recipes-dashboard-module')
        .then(m => m.RecipesDashboardModule)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes-module').then(m => m.RecipesModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication-module').then(m => m.AuthenticationModule)
  },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
