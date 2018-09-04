import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {TokenResponse} from '../../models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError = false;
  errorMessage = '';
  tokenResponse: TokenResponse;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      this.tokenResponse = data;
      if (this.tokenResponse.success === true) {
        // this.resetForm(form);
        // this.toastr.success('User registration successful');
        // this.router.navigate(['/login']);
        const tokenString = this.tokenResponse.data.token.access_token;
        if (tokenString != null) {
          localStorage.setItem('userToken', tokenString);
          this.router.navigate(['/main']);
        }
        console.log('token: ' + this.tokenResponse.data.token.access_token);
      }
   },
   (err: any) => {
     this.isLoginError = true;
     this.errorMessage = err.error.error.message.error_description;
     console.log('error' + this.errorMessage);
   }, () => {
    console.log('complete');
});
 }
}
