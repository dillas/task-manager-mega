import * as types from '../actions/action-types';

export function createTodoSuccess() {
  return {
    type: types.CREATE_TODO_SUCCESS
  };
}

export function getTodosSuccess(todos) {
  return {
    type: types.GET_TODOS_SUCCESS,
    todos
  };
}

export function getTodoSuccess(userId) {
  return {
    type: types.GET_TODO_SUCCESS,
    userId
  };
}

export function updateTodoSuccess(userId) {
  return {
    type: types.UPDATE_TODO_SUCCESS,
    userId
  };
}

export function deleteTodoSuccess(userId) {
  return {
    type: types.DELETE_TODO_SUCCESS,
    userId
  };
}