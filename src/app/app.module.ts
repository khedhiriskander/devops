import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RouterModule, Routes } from '@angular/router';
import {BusinessService} from './core/business.service';
import './operators' ;

const routes: Routes = [{path: '', redirectTo: 'login', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ BusinessService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
