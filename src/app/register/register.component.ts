import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../core/auth.service';
import { BusinessService } from '../core/business.service';
import { User } from "../shared/user.model";
import {Utils} from "../shared/utils";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user:User = {};

  error = true;

  userFirstName_register: '';
  userLastName_register: '';
  userPhone_register: '';

  userBirthDay_day:'';
  userBirthDay_month:'';
  userBirthDay_year:'';
  userBirthDay:'';
  email_register: '';
  password_register: '';

  constructor(private businessService: BusinessService,private authService: AuthService, public router: Router) { }

  ngOnInit() {
    if(this.authService.isUserLoggedIn()) this.router.navigate([this.authService.redirectURL ? this.authService.redirectURL : 'home' ]);
  }

  //verify required inputs
  checkUser(user : User):boolean{

    if (!Utils.check(this.userFirstName_register)) {console.log('first name error form.'); return false}
    if (!Utils.check(this.userLastName_register)) {console.log('last name error form.'); return false}
    if (!Utils.check(this.email_register)) {console.log('eamail error form.'); return false}
    if (!Utils.check(this.password_register)) {console.log('password error form.'); return false}
    if (!Utils.check(this.userPhone_register)) {console.log('phone number error form.'); return false}

    return true;
  }

  fillUser(user : User):void{

    user.firstName = this.userFirstName_register;
    user.lastName = this.userLastName_register;
    user.tel = this.userPhone_register;

    user.birthDate = this.userBirthDay_day + "/" + this.userBirthDay_month.valueOf()+ "/" + this.userBirthDay_year;

    user.mail = this.email_register;
    user.password = this.password_register;

  }

  createAccount():boolean{

    this.error = this.checkUser(this.user);
    console.log(this.error);
    if (!this.error) return false;
    this.fillUser(this.user);
    console.log(this.user);
    this.businessService.createAccount(this.user);

  }

}
