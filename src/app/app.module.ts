import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RouterModule, Routes } from '@angular/router';
import {BusinessService} from './core/business.service';
import './operators' ;
import {HomeModule} from "./home/home.module";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./core/auth-guard.service";
import {AuthService} from "./core/auth.service";
import {RegisterComponent} from "./register/register.component";
import {RegisterModule} from "./register/register.module";

const routes: Routes = ([
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component : RegisterComponent
  }

]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    RouterModule.forRoot(routes),
    HomeModule,
    RegisterModule,
    NgbModule.forRoot()
  ],
  providers: [ BusinessService, AuthGuard, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
