import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  employees: object[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Observable<object>;
  buttons: object[];
  constructor(private store: Store<AppState>) {
    this.data = store.select('employees');
    this.buttons = [{
      name: 'edit',
      callback() { }
    },
    {
      name: 'erase',
      callback({ id }) {
        // dispatch action here to remove employee
        console.log(id)
      }
    }]
  }
}
