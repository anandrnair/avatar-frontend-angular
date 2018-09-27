import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Company, User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  currentUser: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  // options: FormGroup;

  constructor(private userService: UserService) {
    // this.options = fb.group({
    //   hideRequired: false,
    //   floatLabel: 'auto',
    // });
  }

  ngOnInit() {
    this.currentUser = new User();
    this.userService.getUserDetails().subscribe((data: any) => {
      this.currentUser.email = data.data.user.email;
      this.currentUser.username = data.data.user.username;
      this.currentUser.firstName = data.data.user.first_name;
      this.currentUser.lastName = data.data.user.last_name;
      // this.currentUser.company = new Company();
      this.currentUser.company = data.data.user.company;
      console.log(data.data.user);
      this.currentUser.isCompanyAdmin = data.data.user.is_company_admin;
      // this.currentUser.email = data.data.user.email;
      console.log(data);
    });
  }

  updateProfile(form: NgForm) {
    console.log('submit');
    console.log(this.currentUser);
    this.userService.updateUserProfile(this.currentUser, true)
        .subscribe(
            (data: any) => {
              if (data.data.status === false) {
                // error
              }
              this.currentUser.email = data.data.user.email;
              this.currentUser.username = data.data.user.username;
              this.currentUser.firstName = data.data.user.first_name;
              this.currentUser.lastName = data.data.user.last_name;
              // this.currentUser.company = new Company();
              this.currentUser.company = data.data.user.company;
              console.log(data.data.user);
              this.currentUser.isCompanyAdmin = data.data.user.is_company_admin;
              // this.currentUser.email = data.data.user.email;
              console.log(data);
            },
            (error: any) => {
              console.log('error');
            },
            () => {

            });
  }
}
