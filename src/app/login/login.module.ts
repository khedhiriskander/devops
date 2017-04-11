import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import {AuthService} from "../core/auth.service";
import {AuthGuard} from "../core/auth-guard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers : [ AuthService, AuthGuard]
})
export class LoginModule { }
