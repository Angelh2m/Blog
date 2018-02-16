import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {

  user: string;
  token: string;

  constructor(
    private http: HttpClient
  ) {
    this.loadStorage();
  }

  isLogged() {
    return( this.token.length > 5 ? true : false  );
  }

  loadStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      // Transform the Json to js object
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }

  }


  logOut() {
    this.user = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // window.location
  }


  login(user: User): Observable<boolean> {

    const url = `${URL_SERVICES}/login`;

    return this.http.post(url, user)
      .map((userInfo: any) => {

        localStorage.setItem('token', userInfo.token);
        localStorage.setItem('user', JSON.stringify(userInfo.user));
        // localStorage.setItem('id', userInfo.id);
        // Transfor an js object to JSON
        // localStorage.setItem('email', userInfo.user.email);

        this.token = userInfo.token;
        this.user = userInfo.user;

        // console.log(userInfo.user);
        return true;

      })
      .catch((err) => {

        // swal('User does not exist', err.error.message, 'warning');
        return Observable.throw(err);
      });
  }


  createUser(user: User) {

    const url = `${URL_SERVICES}/users`;
    return this.http.post(url, user)
      .map((resp:any) => {

        // swal('User Created!', user.email, 'success');
        return resp.user;
      });
  }

}
