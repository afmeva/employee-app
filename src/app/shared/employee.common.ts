export type country = {
  name: string;
}

export type jobArea = {
  area: string;
  jobTitle: string,
  tipRate: number
}

export type employee = {
  id: number;
  name: string;
  username: string;
  dob: string,
  hireDate: string;
  country: string
  status: boolean,
  area: jobArea,
}

export type appState = {
  employees: employee[]
}