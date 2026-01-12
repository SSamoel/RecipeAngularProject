import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard-layout/dashboard';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { Sidebar } from './sidebar/sidebar';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    Dashboard,
    Sidebar,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatPaginatorModule,
  ]
})
export class DashboardModule { }
