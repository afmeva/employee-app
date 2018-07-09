export enum employeeActions {
  CREATE = 'CREATE_EMPLOYEE',
  UPDATE = 'UPDATE_EMPLOYEE',
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

const ELEMENT_DATA = [
  {
    id: 1,
    name: 'Pikachu',
    username: 'SexyThunder',
    dob: '2000-07-07T05:00:00.000Z',
    hireDate: '2000-07-07T05:00:00.000Z',
    country: 'Colombia',
    status: true,
    area: { area: 'services', jobTitle: 'waitress', tipRate: 0.2 },
  },
  {
    id: 2,
    name: 'Squirtle',
    username: 'DeadPool',
    dob: '2000-07-07T05:00:00.000Z',
    hireDate: '2000-07-07T05:00:00.000Z',
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