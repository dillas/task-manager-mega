import axios from 'axios';
import store from '../store';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://test.megapolis-it.ru/api/',
  headers:     {
    "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
});

export const todosAPI = {
  getTodos() {
    return instance.get(`list`)
  },
  createTodo(todoTitle) {
    instance.post(`list`)
  }
}

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

export function getTodo(id) {
  return axios.get('https://test.megapolis-it.ru/api/list')
  .then(response => {
    let data = response.data.data.filter(el => el.id === id)
    store.dispatch(getTodosSuccess(data));
    console.log(data)
    return data;
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