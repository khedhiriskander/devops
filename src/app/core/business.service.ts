/**
 * Created by Skander Khedhiri on 31/03/2017.
 */

import { Injectable } from '@angular/core' ;
import { Http, Headers, Response } from '@angular/http';
import {Observable} from "rxjs";
import {User} from "../shared/user.model";

@Injectable()
export class BusinessService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  bodylogin = {
    "email": "string",
    "password": "string"
  };

  constructor(private http: Http ) {
  }

  private extractData(res: Response): User {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  loginvynd(email: string, password: string):Promise<User> {
    this.bodylogin.email=email;
    this.bodylogin.password=password;

    return this.http.post("http://vynd-account-api-dev.azurewebsites.net/manager/login",JSON.stringify(this.bodylogin), {headers: this.headers})
      .toPromise()
      .then(this.extractData)
      .catch(error => {
        return error._body;
      });
  }

  createAccount(user: User):Promise<boolean>{
    return Promise.resolve(false);
    //http://vynd-account-api-dev.azurewebsites.net/user/register
  }
}
