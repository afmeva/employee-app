import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators'

import { employeeActions } from '../../reducers/employee.reducer';
import { countryValidator, areaValidator } from './employee-form.validators'
import { country } from '../../shared/employee.common';
import { CountryService } from '../../services/country.service'

type EmployeeFormModes = 'UPDATE' | 'CREATE';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeForm {
  @Input() data; // TODO: create employee type
  @Input() mode: EmployeeFormModes = 'CREATE';
  formGroup: FormGroup;
  maxDate: Date;
  countries: Observable<country[]>;
  filteredCountries

  constructor(private _fb: FormBuilder, private store: Store<any>, private countryService: CountryService) { }

  ngOnInit() {
    this.countries = this.countryService.getCountries();
    this.createForm();

    this.filteredCountries =
      combineLatest(
        this.formGroup.controls.country.valueChanges,
        this.countries)
        .pipe(
          map(([value, countries]) => countries.filter(({ name }) => name.toLowerCase().includes(value)))
        );
  }

  createForm(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.formGroup = this._fb.group({
      id: [''],
      // left column fields
      name: ['', Validators.required],
      username: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.required],
      hireDate: ['', Validators.required],
      country: ['', Validators.required, countryValidator(this.countries)],
      status: [false, Validators.required],
      // right column fields
      area: ['', areaValidator()],
    });

    if (this.mode === 'UPDATE') {
      this.formGroup.setValue(this.data);
    }
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID') {
      this.store.dispatch({ type: employeeActions[this.mode], payload: this.formGroup.value });
    }
  }
}
