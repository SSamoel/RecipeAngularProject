import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard-layout/dashboard';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    Dashboard,

  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
