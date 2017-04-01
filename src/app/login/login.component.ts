import {Component, Input, OnInit} from '@angular/core';
import {BusinessService} from "../core/business.service";
import {User} from "../shared/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};
  email_login: '' ;
  password_login: '' ;
  constructor(private businessService: BusinessService) { }

  ngOnInit() {
  }

  loginvynd() {

    if (this.email_login === '') {
      console.log('Erreur email login !');
    } else if (this.password_login === '') {
      console.log('Erreur password login !');
    } else {

      this.businessService.loginvynd(this.email_login, this.password_login)
        .then(data => {
          this.user = data;
          console.log(data) ;
          console.log(this.user) ;

        });
    }
  }


}
