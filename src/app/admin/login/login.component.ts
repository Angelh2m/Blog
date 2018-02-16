import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email = 'angelhm@mail.com';
  password = '';
  tried = 0;

  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  login(form: NgForm) {

    const user = new User(null, form.value.email, form.value.password);
    this._userService.login(user).subscribe(resp => this.router.navigate(['admin/create']));

    this.email = '';
    this.password = '';
    this.tried += 1;

  }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
  }

}
