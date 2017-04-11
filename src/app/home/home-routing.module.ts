/**
 * Created by Skander Khedhiri on 05/04/2017.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth-guard.service';

const routes: Routes = [{path: 'home', canActivate: [AuthGuard], component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
