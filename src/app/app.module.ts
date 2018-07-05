import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

export interface employee {
  id: number;
  name: string;
  age: number;
  username: string;
  hireDate: number;
}

const ELEMENT_DATA: employee[] = [
  { id: 1, name: 'Pikachu', age: 10, username: 'SexyThunder', hireDate: 1800000 },
  { id: 2, name: 'Squirtle', age: 10, username: 'DeadPool', hireDate: 1800000 },
  { id: 3, name: 'Goku', age: 10, username: 'Mona123', hireDate: 1800000 },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot({
      employees: () => ELEMENT_DATA
    }),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
