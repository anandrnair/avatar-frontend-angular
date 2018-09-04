import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth.guard';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Routes = [
    {
        path: '', component: LoginLayoutComponent, data: {title: 'Login Component'},
        children: [
            {
                path: 'register', component: UserComponent,
                children: [{ path: '', component: RegisterComponent }]
            },
            {
                path: 'login', component: UserComponent,
                children: [{ path: '', component: LoginComponent }]
            },
            { path : '', redirectTo: '/login', pathMatch : 'full'},
        ]
      },
    { path: 'main', component: HomeLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
    ]
  }
];
