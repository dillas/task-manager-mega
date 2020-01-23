import * as types from '../actions/action-types';
import { todoAPI } from '../api/todo-api'

export function createTask() {
  return {
    type: types.CREATE_TASK,
    payload: {id: 7, text: 'qwerty 7'}
  };
}

export const taskIsFetching = () => ({type: types.TASK_IS_FETCHING})


export function getTask() {
  return function (dispatch) {
    todoAPI.getAll()
    .then((response) => dispatch({
      type: types.GET_TASK_SUCCESS,
      payload: response.data
    })).catch((response) => dispatch({
      type: types.GET_TASK_FAILURE,
      payload: response.error
    }))
  }
}
