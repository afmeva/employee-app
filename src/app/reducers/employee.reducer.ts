export enum employeeActions {
  CREATE = 'CREATE_EMPLOYEE',
  REMOVE = 'REMOVE_EMPLOYEE'
}

//TODO: group up interfaces
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

const generateID = () => ELEMENT_DATA.length + 1;

const initialState = ELEMENT_DATA;

export function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case employeeActions.CREATE:
      return [...state, {
        // TODO: should this use domain class
        ...action.payload,
        id: generateID(),
      }];
    case employeeActions.REMOVE:
      const index = state.findIndex(el => el.id === action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}