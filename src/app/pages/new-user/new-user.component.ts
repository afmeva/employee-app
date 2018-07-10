import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  @ViewChild('employeeForm') employeeForm;
  constructor(private dialog: MatDialog) { }

  canDeactive() {
    if (this.employeeForm.formGroup.dirty) {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: {}
      });

      return dialogRef.afterClosed();
    }
    return true;
  }
}
