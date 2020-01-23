import * as types from '../actions/action-types';

export function changeName() {
  return {
    type: types.CHANGE_NAME,
    payload: 'Vasilii'
  };
}

export function changeSecondName() {
  return {
    type: types.CHANGE_SECOND_NAME,
    payload: 'Petrov'
  };
}


