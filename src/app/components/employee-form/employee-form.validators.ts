import { AbstractControl, ValidatorFn } from '@angular/forms';
import { country } from '../../shared/employee.common';

export const countryValidator = (countries: country[]): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasValue = countries.some(({ name }) => name === control.value);
    return hasValue ? null : { error: '' };
  };
}

export const areaValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasErrorOnTexts = !control.value.area ||
      !control.value.jobTitle;

    const hasErrorOnTips = control.value.hasTip
      ? !control.value.tipRate
      : false;

    return hasErrorOnTexts || hasErrorOnTips ? { error: '' } : null;
  };
}