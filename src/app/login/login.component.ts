import {Component, Input, OnInit} from '@angular/core';
import {BusinessService} from "../core/business.service";
import {User} from "../shared/user.model";
import { Utils } from '../shared/utils';
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};
  email_login: '' ;
  password_login: '' ;

  constructor(private businessService: BusinessService,private authService: AuthService, public router: Router) { }

  ngOnInit() {
    if(this.authService.isUserLoggedIn()) this.router.navigate([this.authService.redirectURL ? this.authService.redirectURL : 'home' ]);
  }

  loginvynd() {

    if (this.email_login === '' || typeof this.email_login === 'undefined') {
      console.log('Erreur email login !');
    } else if (this.password_login === ''|| typeof this.password_login === 'undefined') {
      console.log('Erreur password login !');
    } else {

      console.log(this.email_login);
      this.businessService.loginvynd(this.email_login, this.password_login)
        .then(data => {
          this.user = data;
          console.log("data content : "+ data) ;
          console.log("user content : " + this.user) ;

          if(Utils.check(this.user.firstName)){

            console.log("user name : " + this.user.firstName) ;

            this.authService.setUserCredentials(this.user);

            this.authService.login().subscribe(()=>{

              let redirect = this.authService.redirectURL ? this.authService.redirectURL : '';
              this.router.navigate([redirect]);

            })
          }
        });

    }
  }


}
