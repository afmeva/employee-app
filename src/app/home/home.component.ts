import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

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
        // dispatch action here to remove employee
        console.log(id)
        const ans = {
          name: 'lala',
          username: 'userlala',
          dob: '2000-02-10T05:00:00.000Z',
          hireDate: '2010-07-07T05:00:00.000Z',
          country: 'Colombia',
          status: true,
          area: {
            area: 'services',
            jobTitle: 'tuttofare',
            hasTip: false,
            tipRate: null
          }
        }
        this.store.dispatch({ type: 'CREATE', payload: ans });
      }
    }]
  }
}
