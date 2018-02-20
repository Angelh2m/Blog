import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components

// Routes
import { ADMIN_ROUTES } from './admin.router';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    CreateComponent,
    RegisterComponent,
    LoginComponent,
    InputFormatDirective
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ADMIN_ROUTES,
  ]
})
export class AdminModule { }
