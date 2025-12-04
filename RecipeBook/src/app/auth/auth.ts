import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authentication } from '../services/authentication';
import { Observable, Subscription } from 'rxjs';
import { IAuthResponseData } from '../auth.response';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../user.model';
import { Alert } from '../alert/alert';
import { placeholderDirective } from '../directives/placholder.directive';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  isLoggedInMode = true;
  isLoading = false;
  error: any = null;
  user: any;

  private closeSubscription : Subscription | undefined

  // @ViewChild (placeholderDirective,{static:true}) alertHost : placeholderDirective | undefined;

  @ViewChild('dynamicComponent',{read:ViewContainerRef}) dynamicComponent : ViewContainerRef | undefined;

  constructor(private authenticationService: Authentication
    //  , private componentFactoryResolver:ComponentFactoryResolver
    ) { }

  onSwtichMode() {
    this.isLoggedInMode = !this.isLoggedInMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<IAuthResponseData>;
    this.isLoading = true;
    if (this.isLoggedInMode) {
      authObservable = this.authenticationService.login(email, password)
    } else {
      // this.authenticationService.signup(email , password).subscribe({
      //   next:(data: any)=>{
      //     console.log(data);
      //     this.isLoading = false;
      //   },
      //   error : errorMessage=>{
      //     this.error = errorMessage;
      //     console.log(errorMessage);
      //     this.isLoading = false;
      //   }
      // })
      authObservable = this.authenticationService.signup(email, password)
    }

    authObservable.subscribe({
      next: data => {
        console.log(data);
        this.isLoading = false;
      },
      error: errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
        this.showErrorAlert(errorMessage);
      }
    })
    console.log(form.value);
    form.reset();
  }


  onHandleError(){
    this.error = null;
  }

  showErrorAlert(mesaage : string){
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Alert);
    // const hostViewContainerRef = this.alertHost?.viewContainerref;
    // hostViewContainerRef?.clear();
    //  const componentRef= hostViewContainerRef?.createComponent(componentFactory);
    //  componentRef!.instance.message = mesaage;
    // this.closeSubscription = componentRef?.instance.close.subscribe(()=>{
    //   this.closeSubscription?.unsubscribe();
    //   hostViewContainerRef?.clear();
    // })
    this.dynamicComponent?.clear();
    const componentRef = this.dynamicComponent?.createComponent(Alert);
    componentRef!.instance.message = mesaage;
    this.closeSubscription = componentRef?.instance.close.subscribe(()=>{
      this.closeSubscription?.unsubscribe();
      this.dynamicComponent?.clear();
    })
  }
}
