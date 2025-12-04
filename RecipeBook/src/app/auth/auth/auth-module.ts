import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Auth } from '../auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinner } from '../../loading-spinner/loading-spinner';


@NgModule({
  declarations: [
    Auth,
    LoadingSpinner
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Auth,
        LoadingSpinner

  ]
})
export class AuthModule { }
