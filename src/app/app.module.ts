import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {AppComponent} from './app.component';
import {AuthGuard} from './auth.guard';
import {AuthInterceptor} from './auth.interceptor';
import {HomeLayoutComponent} from './home-layout/home-layout.component';
import {HomeComponent} from './home/home.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {CustomMaterialModule} from './material.module';
import {NavigationComponent} from './navigation/navigation.component';
import {RegisterComponent} from './register/register.component';
import {appRoutes} from './routes';
import {UserService} from './services/user.service';
import {SettingsComponent} from './settings/settings.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {LoginComponent} from './user/login/login.component';
import {UserComponent} from './user/user.component';
import { HomeTabComponent } from './home-tab/home-tab.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, UserComponent, LoginComponent,
    RegisterComponent, NavigationComponent, ToolbarComponent,
    LoginLayoutComponent, HomeLayoutComponent, SettingsComponent, HomeTabComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    BrowserAnimationsModule, HttpClientModule, RouterModule.forRoot(appRoutes),
    CustomMaterialModule
  ],
  providers: [
    UserService, AuthGuard, AuthInterceptor,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // static injector: Injector;
  constructor() {
    // AppModule.injector = injector;
  }
}
