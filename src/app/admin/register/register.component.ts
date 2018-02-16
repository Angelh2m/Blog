import { Component, OnInit, group } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _userService: UserService
  ) {}

  registerUser() {

    if (this.form.invalid) {
      return;
    }

    const user = new User(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password,
    );

    this._userService.createUser(user)
      .subscribe(res => {
        console.log(res);

      });

    // swal('Imporant', 'MMMM', 'success');
    // console.log(this.form.value);
    // console.log(this.form.valid);

  }

  samePasswords(field1: string, field2: string) {

    return (g: FormGroup) => {

      const pass1 = g.controls[field1].value;
      const pass2 = g.controls[field2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        notTheSame: true,
      };

    };
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      passwordConfirm: new FormControl(null, Validators.required),
      conditions: new FormControl(false)
    }, { validators: this.samePasswords('password', 'passwordConfirm') });

    this.form.setValue({
      name: 'test',
      email: 'angelh2m@gmail.com',
      password: '1212',
      passwordConfirm: '1212',
      conditions: true,
    });
  }
}
