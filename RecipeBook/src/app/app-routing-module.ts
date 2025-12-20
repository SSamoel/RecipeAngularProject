import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { authGuard } from './core/guards/auth-guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./Dashboard/dashboard-module')
        .then(m => m.DashboardModule)
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
