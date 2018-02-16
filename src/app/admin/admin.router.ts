import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AdminComponent } from './admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';



const adminRoutes: Routes = [

  {
    path: 'create',
    component: CreateComponent,
    canActivate: [LoginGuardGuard],
    data: { titulo: 'Create Element' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { titulo: 'Create account' }
  },
  {
    path: '',
    component: LoginComponent,
    data: { titulo: 'Login' }
  },

];

// Export the child routes
export const ADMIN_ROUTES = RouterModule.forChild( adminRoutes );
