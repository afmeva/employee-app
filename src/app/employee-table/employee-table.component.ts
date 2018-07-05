import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  @Input() dataSource;
  displayedColumns: string[] = ['name', 'age', 'username', 'hireDate', 'controls'];
  onErase(id: number) {
    console.log(id);
  }
}
