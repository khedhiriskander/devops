/**
 * Created by Skander Khedhiri on 01/04/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {BusinessService} from "../core/business.service";
import {User} from "../shared/user.model";

@Component({
  selector: 'app-home',
})
export class HomeComponent implements OnInit {

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
