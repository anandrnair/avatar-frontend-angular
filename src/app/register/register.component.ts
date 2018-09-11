import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(
      private userService: UserService, private toastr: ToastrService,
      private router: Router) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      id: '',
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      company: null,
      isCompanyAdmin: false
    };
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
        .subscribe(
            (data: any) => {
              if (data.success === true) {
                this.resetForm(form);
                this.toastr.success('User registration successful');
                this.router.navigate(['/login']);
              }
            },
            (error: any) => {
              this.toastr.error(error.error.error.message[0]);
              console.log(error);
            },
            () => {
              console.log('complete');
            });
  }
}
