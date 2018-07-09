import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeForm } from './employee-form.component';

describe('EmployeeForm', () => {
  let component: EmployeeForm;
  let fixture: ComponentFixture<EmployeeForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeForm]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
