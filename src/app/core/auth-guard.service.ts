/**
 * Created by Skander Khedhiri on 05/04/2017.
 */
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    //let url: string = state.url;
    let url: string = '/home';
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    return this.canActivate(childRoute, state);
  }

  constructor(private authService: AuthService, private router: Router){
    console.log("auth-guard frère !");
  }

  private checkLogin(url: string): boolean {

    console.log("authguard checklogin -> is logged in : " + this.authService.isLoggedIn);
    //if (this.authService.isLoggedIn) {return true}
    if (this.authService.isUserLoggedIn()) {return true}

    this.authService.redirectURL = url;
    this.router.navigate(['/login']);

    return false;
  }
}
