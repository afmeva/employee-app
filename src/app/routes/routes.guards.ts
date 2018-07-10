import { Injectable } from '@angular/core'
import { CanDeactivate } from '@angular/router'
import { Observable } from 'rxjs';

import { NewUserComponent } from '../pages/new-user/new-user.component';

@Injectable()
export class CanDeactivateForm implements CanDeactivate<any> {
  constructor() { }

  canDeactivate(component: NewUserComponent): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactive ? component.canDeactive() : true;
  }
}