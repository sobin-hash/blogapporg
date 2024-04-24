import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminUserDashComponent } from './admin-user-dash/admin-user-dash.component';
import { routeguardGuard } from '../routeguard.guard';

const routes: Routes = [
  { path: '', component: AdminpanelComponent,canActivate:[routeguardGuard] },
  // {path:'adminpanel',component:AdminpanelComponent},
  {path:'userblogs/:id',component:AdminUserDashComponent,canActivate:[routeguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
