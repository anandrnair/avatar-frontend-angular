import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: ''
    };
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.success === true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
          this.router.navigate(['/login']);
        }
      }, (error: any) => {
        this.toastr.error(error.error.error.message[0]);
        console.log(error);
      }, () => {
        console.log('complete');
    });
  }

}
