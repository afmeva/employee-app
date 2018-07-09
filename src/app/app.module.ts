import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './effects/employee.effects';
import { HttpClientModule } from '@angular/common/http';

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

//pipes
import { DateToAge } from './pipes/date-age.pipe';

//routes
import { routes } from './routes/routes.config';

//reducers
import { employeeReducer } from './reducers/employee.reducer';

//pages
import { HomeComponent } from './pages/home/home.component';

//components
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { JobAreaSelectorComponent } from './components/job-area-selector/job-area-selector.component';
import { EmployeeForm } from './components/employee-form/employee-form.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent, // TODO: review declaration.
    NewUserComponent,
    HomeComponent,
    JobAreaSelectorComponent,
    EmployeeForm,
    DateToAge,
    EditUserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      employees: employeeReducer,
    }),
    EffectsModule.forRoot([EmployeeEffects]),
    HttpClientModule,
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
