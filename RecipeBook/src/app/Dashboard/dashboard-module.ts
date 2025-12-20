import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard-layout/dashboard';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { SharedModule } from '../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Dashboard,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
