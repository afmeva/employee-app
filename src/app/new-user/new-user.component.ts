import { Component, } from '@angular/core';
import {
  AbstractControl,
  ValidatorFn,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

type country = {
  name: string;
}

const countryValidator = (countries: country[]): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasValue = countries.some(({ name }) => name === control.value);
    return hasValue ? null : { error: '' };
  };
}

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
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  formGroup: FormGroup;
  maxDate: Date;
  countries: object[];

  constructor(private _fb: FormBuilder) {
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
      area: ['', Validators.required],
    });
  }
}

