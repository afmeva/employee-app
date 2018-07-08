import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { MatNativeDateModule } from '@angular/material'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';


//routes
import { routes } from './routes/routes.config';

//components
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { JobAreaSelectorComponent } from './job-area-selector/job-area-selector.component';

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
    HomeComponent,
    JobAreaSelectorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      employees: () => ELEMENT_DATA
    }),
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatRadioModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
