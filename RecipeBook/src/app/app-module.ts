import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoadingSpinner } from './loading-spinner/loading-spinner';
import { AuthInterceptor } from './services/authentication.interceptor';
import { Alert } from './alert/alert';
import { placeholderDirective } from "./directives/placholder.directive";
import { RecipesModule } from './recipes/recipes/recipes-module';
import { ShoppingListModule } from './shopping-list/shopping-list/shopping-list-module';
import { AuthModule } from './auth/auth/auth-module';

@NgModule({
  declarations: [
    App,
    Header,
    Alert
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    placeholderDirective,

],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
