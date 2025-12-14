import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { Alert } from './alert/alert';
import { placeholderDirective } from "./directives/placholder.directive";
import { CoreModule } from './core/core-module';
import { Home } from './home/home';
import { authInterceptorService } from './services/auth-interceptor-service';

@NgModule({
  declarations: [
    App,
    Alert,
    Home
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    placeholderDirective,

],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:authInterceptorService , multi:true}
  ],
  bootstrap: [App]
})
export class AppModule { }
