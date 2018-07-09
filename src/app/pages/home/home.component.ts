import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

import { employeeActions } from '../../reducers/employee.reducer';

interface AppState {
  employees: object[];
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Observable<object>;
  buttons: object[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.data = store.select('employees');
    this.buttons = [{
      name: 'Edit',
      callback: ({ id }) => {
        this.router.navigate([id]);
      }
    },
    {
      name: 'Erase',
      callback: ({ id }) => {
        this.store.dispatch({ type: employeeActions.REMOVE, payload: id });
      }
    }]
  }
}
