import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateToAge' })
export class DateToAge implements PipeTransform {
  transform(value: number, exponent: string): number {
    // this has precision issues
    const dateDiff = Date.now() - new Date(value).getTime();
    var ageDate = new Date(dateDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}