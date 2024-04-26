import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
// import { ViewComponent } from './view/view.component';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AddpostComponent } from './addpost/addpost.component';
// import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PipesPipe } from './search/pipes.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { BloggingTrendComponent } from './blogging-trend/blogging-trend.component';
import { AiTrendsComponent } from './ai-trends/ai-trends.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LandingComponent,
    AddpostComponent,
    BlogviewComponent,
    UserdashboardComponent,
    PipesPipe,
    ContactUsComponent,
    ProfileComponent,
    BloggingTrendComponent,
    AiTrendsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
