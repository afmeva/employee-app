import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'

//routes
import routes from './routes/routes.config';

//components
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

//TODO: group up interfaces
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
    EmployeeTableComponent, // TODO: review declaration.
    NewUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      employees: () => ELEMENT_DATA
    }),
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
