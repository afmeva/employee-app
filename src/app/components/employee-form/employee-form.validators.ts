import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { country } from '../../shared/employee.common';

export const countryValidator = (countries: Observable<country[]>): ValidatorFn => {
  return (control: AbstractControl): Observable<{ error: string } | null> => {
    return countries.pipe(
      map((countries: country[]) => {
        const hasValue = countries.some(({ name }) => name === control.value);
        return hasValue ? null : { error: '' };
      })
    )
  };
}

export const areaValidator = (): ValidatorFn => {
  return (control: AbstractControl): { error: string } | null => {
    const hasErrorOnTexts = !control.value.area ||
      !control.value.jobTitle;

    const hasErrorOnTips = control.value.hasTip
      ? !control.value.tipRate
      : false;

    return hasErrorOnTexts || hasErrorOnTips ? { error: '' } : null;
  };
}