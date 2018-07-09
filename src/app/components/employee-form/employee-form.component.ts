import { Component, } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { employeeActions } from '../../reducers/employee.reducer';
import { countryValidator, areaValidator } from './employee-form.validators'
import { country } from '../../shared/employee.common';

//TODO: create country service
const countries: country[] = [
  {
    name: 'Colombia'
  },
  {
    name: 'Suecia'
  },
  {
    name: 'India'
  }
];

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeForm {
  formGroup: FormGroup;
  maxDate: Date;
  countries: object[];

  constructor(private _fb: FormBuilder, private store: Store<any>) {
    this.countries = countries;
    this.createForm();
  }

  createForm(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.formGroup = this._fb.group({
      // left column fields
      name: ['', Validators.required],
      username: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.required],
      hireDate: ['', Validators.required],
      country: ['', Validators.compose([Validators.required, countryValidator(countries)])],
      status: [false, Validators.required],
      // right column fields
      area: ['', areaValidator()],
    });

  }

  onSubmit() {
    if (this.formGroup.status === 'VALID') {
      this.store.dispatch({ type: employeeActions.CREATE, payload: this.formGroup.value });
    }
  }
}
