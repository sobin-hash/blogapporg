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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { userguardGuard } from './userguard.guard';
import { AiTrendsComponent } from './ai-trends/ai-trends.component';
import { BloggingTrendComponent } from './blogging-trend/blogging-trend.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[userguardGuard]},
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addpost',component:AddpostComponent},
  {path:'addpost/:id',component:AddpostComponent},
  {path:'contact',component:ContactUsComponent},
  
  {path:'blogview/:id',component:BlogviewComponent},
  {path:'aitrends',component:AiTrendsComponent},
  {path:'blogingtrends',component:BloggingTrendComponent},
  {path:'dashboard',component:UserdashboardComponent,canActivate:[userguardGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[userguardGuard]},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
