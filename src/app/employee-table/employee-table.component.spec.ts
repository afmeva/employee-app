import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { EmployeeTableComponent } from './employee-table.component';

describe('EmployeeTableComponent', () => {
  let component: EmployeeTableComponent;
  let fixture: ComponentFixture<EmployeeTableComponent>;

  const DATA = [
    { id: 1, name: 'Pikachu', age: 10, username: 'SexyThunder', hireDate: 1800000 },
    { id: 2, name: 'Squirtle', age: 10, username: 'DeadPool', hireDate: 1800000 },
    { id: 3, name: 'Goku', age: 10, username: 'Mona123', hireDate: 1800000 },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTableComponent],
      imports: [MatTableModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTableComponent);
    component = fixture.componentInstance;

    component.dataSource = DATA;

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the expected rows with the given data', () => {
    expect(fixture.nativeElement.querySelectorAll('tr[mat-row]').length).toBe(DATA.length)
  });

  it('should render the expected buttons with the given button array', () => {
    const BUTTON_ARRAY = [
      {
        name: 'edit',
        callback: jasmine.createSpy()
      },
      {
        name: 'erase',
        callback: jasmine.createSpy()
      }
    ];

    const buttons = fixture.nativeElement.querySelector('td[mat-cell]').querySelectorAll('button');
    expect(buttons.length).toBe(BUTTON_ARRAY.length);

    buttons[0].click();
    expect(buttons[0].callback).toHaveBeenCalled();

    buttons[1].click();
    expect(buttons[1].callback).toHaveBeenCalled();
  });
});
