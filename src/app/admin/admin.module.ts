import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminUserDashComponent } from './admin-user-dash/admin-user-dash.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminpanelComponent,
    AdminUserDashComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
