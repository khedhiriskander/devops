/**
 * Created by Skander Khedhiri on 05/04/2017.
 */
import {Injectable} from '@angular/core';
import {User} from "../shared/user.model";
import {Utils} from "../shared/utils";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn: boolean;
  redirectURL: string; //store the URL so we can redirect after logging in

  login(): Observable<boolean>{
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }
  logout(): void{
    this.isLoggedIn = false;
  }

  constructor(){}

  getCurrentUser(): User {
    if (this.isUserLoggedIn()) {
      return JSON.parse(localStorage.getItem('current_vyndee'));
    }
    return null;
  }

  setUserCredentials(user: User): void {
    localStorage.setItem('current_vyndee', JSON.stringify(user));
  }

  isUserLoggedIn() {
    return Utils.check(localStorage.getItem('current_vyndee'));
  }

  logoutUser (){
    localStorage.clear();
  }

  getRedirectURL(): string {
    return this.redirectURL;
  }

  setRedirectURL(redirectURL: string) {
    this.redirectURL = redirectURL;
  }

}
