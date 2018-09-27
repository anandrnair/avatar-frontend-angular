import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {Field} from '../models/field.model';
import {FieldsResponse} from '../models/field.model';
import {UserService} from '../services/user.service';
import {AddFieldDialogComponent} from '../user/add-field-dialog/add-field-dialog.component';

@Component({
  selector: 'app-manage-fields',
  templateUrl: './manage-fields.component.html',
  styleUrls: ['./manage-fields.component.css']
})
export class ManageFieldsComponent implements OnInit {
  fields: Field[];
  constructor(private userService: UserService, private dialog: MatDialog) {}

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

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = '300px';
    // dialogConfig.height = '300px';
    this.dialog.open(AddFieldDialogComponent, dialogConfig);
  }
}
