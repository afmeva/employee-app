import { Component } from '@angular/core';

export interface employee {
  id: number;
  name: string;
  age: number;
  username: string;
  hireDate: number;
}

const ELEMENT_DATA: employee[] = [
  { id: 1, name: 'Pikachu', age: 10, username: 'SexyThunder', hireDate: 1800000 },
  { id: 2, name: 'Squirtle', age: 10, username: 'DeadPool', hireDate: 1800000 },
  { id: 3, name: 'Goku', age: 10, username: 'Mona123', hireDate: 1800000 },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = ELEMENT_DATA;
}
