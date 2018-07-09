import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  data: any;
  employeeId: number;

  //TODO: create state type
  constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    combineLatest(this.route.params, this.store.select('employees'))
      .subscribe(([{ employeeId }, employees]) => {
        const employee = employees.find(employee => employee.id === parseInt(employeeId));
        if (employee) {
          this.data = employee;
        } else {
          this.router.navigate(['/new-user']);
        }
      });
  }
}
