import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { employeeActions } from '../reducers/employee.reducer';

@Injectable()
export class EmployeeEffects {
  @Effect({
    dispatch: false
  })
  saveEmployee$: Observable<Promise<boolean>> =
    this.actions$.pipe(
      ofType(employeeActions.CREATE, employeeActions.UPDATE),
      map(_ => this.router.navigate(['/']))
    );
  constructor(private actions$: Actions, private router: Router) { }
}