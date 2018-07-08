import { Component, } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AbstractControl,
  ValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
  NgControlStatus
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

const areaValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasErrorOnTexts = !control.value.area ||
      !control.value.jobTitle;

    const hasErrorOnTips = control.value.hasTip
      ? !control.value.tipRate
      : false;

    return hasErrorOnTexts || hasErrorOnTips ? { error: '' } : null;
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

  constructor(private _fb: FormBuilder, private store: Store<any>) {
    this.countries = countries;
    this.createForm();
  }

  createForm(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.formGroup = this._fb.group({
      // left column fields
      name: [''],
      username: [''],
      dob: [''],
      hireDate: [''],
      country: [''],
      status: [false],
      // right column fields
      area: [''],
      // });
      // left column fields
      // name: ['', Validators.required],
      // username: ['', Validators.compose([Validators.required])],
      // dob: ['', Validators.required],
      // hireDate: ['', Validators.required],
      // country: ['', Validators.compose([Validators.required, countryValidator(countries)])],
      // status: [false, Validators.required],
      // // right column fields
      // area: ['', Validators.compose([Validators.required, areaValidator()])],
    });

  }

  onSubmit() {
    const ans = {
      name: 'lala',
      username: 'userlala',
      dob: '2000-02-10T05:00:00.000Z',
      hireDate: '2010-07-07T05:00:00.000Z',
      country: 'Colombia',
      status: true,
      area: {
        area: 'services',
        jobTitle: 'tuttofare',
        hasTip: false,
        tipRate: null
      }
    }
    this.store.dispatch({ type: 'CREATE', payload: ans });
  }
}
