import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    console.log(control, form);
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  formGroup: FormGroup;
  matcher: ErrorStateMatcher;

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.formGroup = this._fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9]')
      ])],
      id: [''],
      dob: [''],
      age: [''],
      hireDate: [''],
      country: [''],
      area: [''],
      status: [''],
      jobTitle: [''],
      tipRate: ['']
    });
    this.matcher = new MyErrorStateMatcher();
  }
}
