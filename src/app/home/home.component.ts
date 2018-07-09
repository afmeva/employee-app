import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { employeeActions } from '../reducers/employee.reducer';

interface AppState {
  employees: object[];
};

type jobTitle = "undef" | "host" | "waitress";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Observable<object>;
  buttons: object[];
  test: jobTitle;

  constructor(private store: Store<AppState>) {
    this.data = store.select('employees');
    this.buttons = [{
      name: 'edit',
      callback() { }
    },
    {
      name: 'erase',
      callback: ({ id }) => {
        this.store.dispatch({ type: employeeActions.REMOVE, payload: id });
      }
    }]
  }
}
