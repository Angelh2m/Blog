import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';



@Injectable()
export class LoginGuardGuard implements CanActivate {


  constructor(
    public _userService: UserService,
    private router: Router
  ) {

  }

  canActivate() {

    // =====================================
    //      TOKEN === TRUTE = ACCESS
    // =====================================

    if (this._userService.isLogged() ) {
      // console.log('Guard working');
      return true;
    } else {
      // console.log('Block by the guard');
      this.router.navigate(['/admin']);
    }

    return true;
  }
}
