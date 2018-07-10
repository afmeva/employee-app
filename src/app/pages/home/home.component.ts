import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router'
import { Observable, combineLatest, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

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
  data: Observable<any>;
  buttons: object[];
  searchTerm: FormControl;
  filteredData: any;

  constructor(private store: Store<AppState>, private router: Router) {
    this.searchTerm = new FormControl();
    this.data = store.select('employees');

    this.filteredData =
      combineLatest(
        this.data,
        this.searchTerm.valueChanges.pipe(startWith(''))
      ).pipe(
        map(([data, searchTerm]) => {
          return data.filter(({ name }) => name.toLowerCase().includes(searchTerm));
        })
      );

    this.buttons = [{
      name: 'Edit',
      callback: ({ id }) => {
        this.router.navigate([id]);
      }
    },
    {
      name: 'View',
      callback: ({ id }) => {
        this.router.navigate([id], { queryParams: { viewmode: 'true' } });
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
