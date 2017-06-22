import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    DataService
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
