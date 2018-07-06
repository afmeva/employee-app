import { Routes } from '@angular/router';
import { NewUserComponent } from '../new-user/new-user.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'newuser', component: NewUserComponent },
  {
    path: '',
    component: HomeComponent,
  },
  // { path: '**', component: PageNotFoundComponent }
];

export default routes;