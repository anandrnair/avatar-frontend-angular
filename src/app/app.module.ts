import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
import {CustomMaterialModule} from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    ToolbarComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CustomMaterialModule
  ],
  providers: [
    UserService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
