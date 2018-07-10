import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EmployeeForm } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<EmployeeForm>) { }
  onCancel() {
    this.dialogRef.close(false);
  }
  onAccept() {
    this.dialogRef.close(true);
  }
}
