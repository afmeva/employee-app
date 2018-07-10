import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  data: any;
  employeeId: number;
  disabled: boolean = false;
  subscription: Subscription;

  //TODO: create state type
  constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = combineLatest(
      this.route.params,
      this.store.select('employees'),
      this.route.queryParams)
      .subscribe(([{ employeeId }, employees, { viewmode }]) => {
        const employee = employees.find(employee => employee.id === parseInt(employeeId));
        if (employee) {
          this.data = employee;
          this.disabled = viewmode;
        } else {
          this.router.navigate(['/new-user']);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
