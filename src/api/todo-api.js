import axios from 'axios';
import store from '../store';
import {
  createTodoSuccess,
  deleteTodoSuccess,
  getTodosSuccess,
  getTodoSuccess,
  updateTodoSuccess
} from '../actions/todo-actions'

export function createTodo(todoTitle) {
  return axios.post('https://test.megapolis-it.ru/api/list', {
    title: todoTitle
  }).then(function (response) {
    console.log(response);
    store.dispatch(createTodoSuccess(response.data));
    return response;
  }).catch(function (error) {
    console.log(error);
  });
}

export function getTodos() {
  return axios.get('https://test.megapolis-it.ru/api/list')
  .then(response => {
    console.log(response.data)
    store.dispatch(getTodosSuccess(response.data));
    return response;
  });
}

export function updateTodo(todoId, todoTitle) {
  return axios.post('https://test.megapolis-it.ru/api/list/' + todoId, {
    title: todoTitle
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}

export function deleteTodo(todoId) {
  return axios.delete('https://test.megapolis-it.ru/api/list/' + todoId)
  .then(response => {
    console.log(response)
    // store.dispatch(deleteUserSuccess(todoId));
    return response;
  });
}