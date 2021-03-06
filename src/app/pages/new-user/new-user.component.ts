import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Store } from '@ngrx/store';

import { employeeActions } from '../../reducers/employee.reducer';
import { appState } from '../../shared/employee.common';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  @ViewChild('employeeForm') employeeForm;
  constructor(private dialog: MatDialog, private store: Store<appState>) {
    this.onSubmit = this.onSubmit.bind(this);
  }


  canDeactive() {
    if (this.employeeForm.formGroup.dirty && this.employeeForm.formGroup.status === 'INVALID') {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: {}
      });

      return dialogRef.afterClosed();
    }
    return true;
  }

  onSubmit(form) {
    if (form.status === 'VALID') {
      this.store.dispatch({ type: employeeActions.CREATE, payload: form.value });
    }
  }
}
