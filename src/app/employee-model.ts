type jobTitle = "undef" | "host" | "waitress";

export class Employee {
  id: number;
  name: string;
  dob: number;
  country: string;
  age: number;
  username: string;
  hireDate: number;
  area: string;
  status: boolean;
  jobTitle: jobTitle;
  tipRate: number;
}

export const data: Employee[] = [
  {
    id: 1,
    name: 'Pikachu',
    username: 'SexyThunder',
    dob: 14000000,
    age: 10,
    hireDate: 1800000,
    country: 'Colombia',
    area: 'Kitchen',
    status: true,
    jobTitle: 'host',
    tipRate: 0.01,
  },
  {
    id: 2,
    name: 'Squirtle',
    username: 'DeadPool',
    dob: 14000000,
    age: 10,
    hireDate: 1800000,
    country: 'Colombia',
    area: 'Kitchen',
    status: true,
    jobTitle: 'host',
    tipRate: 0.01,
  },
  {
    id: 3,
    name: 'Goku',
    username: 'Mona123',
    dob: 14000000,
    age: 10,
    hireDate: 1800000,
    country: 'Colombia',
    area: 'Kitchen',
    status: true,
    jobTitle: 'host',
    tipRate: 0.01,
  },
];