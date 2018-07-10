import { Component, Input, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  @Input() dataSource: object[];
  @Input() buttons: object[];
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'age', 'username', 'hireDate', 'controls'];
}
