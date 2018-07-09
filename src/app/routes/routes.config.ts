import { Routes } from '@angular/router';
import { NewUserComponent } from '../pages/new-user/new-user.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  { path: 'newuser', component: NewUserComponent },
  {
    path: '',
    component: HomeComponent,
  },
  // { path: '**', component: PageNotFoundComponent }
];

export { routes };