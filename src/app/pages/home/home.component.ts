import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('employeeTable') employeeTable;
  data: Observable<any>;
  buttons: object[];
  searchTerm: FormControl;
  filteredData: any;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.searchTerm = new FormControl();
    this.data = this.store.select('employees');

    this.filteredData =
      combineLatest(
        this.data,
        this.searchTerm.valueChanges.pipe(startWith('')),
        this.employeeTable.sort.sortChange.pipe(startWith({ active: "", direction: "" })),
      ).pipe(
        map(([data, searchTerm, sortParams]) => {
          return data
            .filter(({ name }) => name.toLowerCase().includes(searchTerm))
            .sort((employee1, employee2) => {
              let param1;
              let param2;
              const isAsc = sortParams.direction === 'asc'
              if (sortParams.direction === '') {
                return 0;
              }
              switch (sortParams.active) {
                case 'name': [param1, param2] = [employee1.name, employee2.name]; break;
                case 'age': [param2, param1] = [employee1.dob, employee2.dob]; break;
                case 'username': [param1, param2] = [employee1.username, employee2.username]; break;
                case 'hireDate': [param1, param2] = [employee1.hireDate, employee2.hireDate]; break;
              }
              return (param1 < param2 ? -1 : 1) * (isAsc ? 1 : -1);
            })
        }),
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
