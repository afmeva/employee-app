import { employee } from '../shared/employee.common';

export enum employeeActions {
  CREATE = 'CREATE_EMPLOYEE',
  UPDATE = 'UPDATE_EMPLOYEE',
  REMOVE = 'REMOVE_EMPLOYEE'
}

//TODO: create service
const ELEMENT_DATA: employee[] = [
  {
    id: 1,
    name: 'Pikachu',
    username: 'SexyThunder',
    dob: '1995-07-07T05:00:00.000Z',
    hireDate: '1998-07-07T05:00:00.000Z',
    country: 'Colombia',
    status: true,
    area: { area: 'services', jobTitle: 'waitress', tipRate: 0.2 },
  },
  {
    id: 2,
    name: 'Squirtle',
    username: 'DeadPool',
    dob: '1990-07-07T05:00:00.000Z',
    hireDate: '1995-07-07T05:00:00.000Z',
    country: 'Colombia',
    status: true,
    area: { area: 'services', jobTitle: 'waitress', tipRate: 0.2 },
  },
  {
    id: 3,
    name: 'Minion',
    username: 'Banana',
    dob: '2000-07-07T05:00:00.000Z',
    hireDate: '2000-07-07T05:00:00.000Z',
    country: 'Colombia',
    status: true,
    area: { area: 'services', jobTitle: 'waitress', tipRate: 0.2 },
  },
  {
    id: 4,
    name: 'Poppy',
    username: 'Pirata',
    dob: '1980-07-07T05:00:00.000Z',
    hireDate: '2005-07-07T05:00:00.000Z',
    country: 'Colombia',
    status: true,
    area: { area: 'services', jobTitle: 'waitress', tipRate: 0.2 },
  },
  {
    id: 5,
    name: 'Snake',
    username: 'Metal',
    dob: '1982-07-07T05:00:00.000Z',
    hireDate: '1970-07-07T05:00:00.000Z',
    country: 'Colombia',
    status: true,
    area: { area: 'services', jobTitle: 'waitress', tipRate: 0.2 },
  },
  {
    id: 6,
    name: 'Mario',
    username: 'Princess',
    dob: '1997-07-07T05:00:00.000Z',
    hireDate: '2018-07-07T05:00:00.000Z',
    country: 'Colombia',
    status: true,
    area: { area: 'services', jobTitle: 'waitress', tipRate: 0.2 },
  },
];

const generateID = (): number => ELEMENT_DATA.length + 1;

const initialState: employee[] = ELEMENT_DATA;

export function employeeReducer(state: employee[] = initialState, action) {
  switch (action.type) {
    case employeeActions.CREATE:
      return [...state, {
        // TODO: should this use domain class
        ...action.payload,
        id: generateID(),
      }];
    case employeeActions.UPDATE: {
      const index = state.findIndex(el => el.id === action.payload.id);
      return index !== -1
        ? [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ]
        : state;
    }
    case employeeActions.REMOVE: {
      const index = state.findIndex(el => el.id === action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}