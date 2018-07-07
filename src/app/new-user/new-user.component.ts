import { Component, } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    console.log(control, form);
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
function validatorTest(arr): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasValue = arr.some(el => el.name === control.value);
    return hasValue ? null : { error: '' };
  };
}

const countries = [
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
  matcher: ErrorStateMatcher;
  maxDate: Date;
  countries: object[];

  constructor(private _fb: FormBuilder) {
    this.countries = countries;
    this.createForm();
  }
  createForm() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.formGroup = this._fb.group({
      name: ['', Validators.required],
      username: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9]')])],
      id: [''],
      dob: ['', Validators.required],
      age: [''],
      hireDate: ['', Validators.required],
      country: ['', Validators.compose([Validators.required, validatorTest(countries)])],
      area: [''],
      status: [''],
      jobTitle: [''],
      tipRate: ['']
    });
    this.matcher = new MyErrorStateMatcher();
  }
}

