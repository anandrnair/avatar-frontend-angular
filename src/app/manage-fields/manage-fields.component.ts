import {Component, OnInit} from '@angular/core';
import {Field} from '../models/field.model';
import {FieldsResponse} from '../models/field.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-manage-fields',
  templateUrl: './manage-fields.component.html',
  styleUrls: ['./manage-fields.component.css']
})
export class ManageFieldsComponent implements OnInit {
  fields: Field[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserFields().subscribe(
        (data: FieldsResponse) => {
          if (data.success === true) {
            console.log(data.data.fields);
            this.fields = data.data.fields;
          }
        },
        (error: any) => {

        },
        () => {});
  }
}
