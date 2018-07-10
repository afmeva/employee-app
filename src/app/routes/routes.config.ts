import { Routes } from '@angular/router';
import { NewUserComponent } from '../pages/new-user/new-user.component';
import { HomeComponent } from '../pages/home/home.component';
import { EditUserComponent } from '../pages/edit-user/edit-user.component';

import { CanDeactivateForm } from './routes.guards';

const routes: Routes = [
  { path: 'newuser', component: NewUserComponent, canDeactivate: [CanDeactivateForm] },
  { path: '', component: HomeComponent, },
  { path: ':employeeId', component: EditUserComponent }
  // { path: '**', component: PageNotFoundComponent }
];

export { routes };