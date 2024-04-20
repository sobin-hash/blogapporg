import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { AddpostComponent } from './addpost/addpost.component';
// import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addpost',component:AddpostComponent},
  {path:'addpost/:id',component:AddpostComponent},
  // {path:'adminpanel',component:AdminpanelComponent},
  {path:'blogview/:id',component:BlogviewComponent},
  {path:'dashboard',component:UserdashboardComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
